module FilteringOptions.MaxNumberOfDropdownItems exposing (suite)

import Expect
import Main exposing (figureOutWhichOptionsToShowInTheDropdown)
import Option exposing (newOption, setGroupWithString)
import OptionSearcher
import OptionsUtilities exposing (highlightOptionInList, selectOptionInList)
import OutputStyle exposing (MaxDropdownItems(..), SearchStringMinimumLength(..))
import PositiveInt
import SearchString
import SelectionMode exposing (OutputStyle(..), SelectionConfig(..), defaultSelectionConfig)
import Test exposing (Test, describe, test)


screwDriver =
    newOption "Screw Driver" Nothing
        |> setGroupWithString "Hand Tool"


wrench =
    newOption "Wrench" Nothing
        |> setGroupWithString "Hand Tool"


hammer =
    newOption "Hammer" Nothing
        |> setGroupWithString "Hand Tool"


chisel =
    newOption "Chisel" Nothing
        |> setGroupWithString "Hand Tool"


multiMeter =
    newOption "Multi Meter" Nothing
        |> setGroupWithString "Electronic Instrument"


signalTester =
    newOption "Signal Tester" Nothing
        |> setGroupWithString "Electronic Instrument"


drill =
    newOption "Drill" Nothing
        |> setGroupWithString "Power Tool"


sawZaw =
    newOption "Saw Zaw" Nothing
        |> setGroupWithString "Power Tool"


xActoKnife =
    newOption "xActo" Nothing
        |> setGroupWithString "Hand Tool"


tools =
    [ screwDriver
    , drill
    , multiMeter
    , sawZaw
    , wrench
    , hammer
    , chisel
    , signalTester
    , xActoKnife
    ]


ten =
    FixedMaxDropdownItems (PositiveInt.new 10)


nine =
    FixedMaxDropdownItems (PositiveInt.new 9)


five =
    FixedMaxDropdownItems (PositiveInt.new 5)


six =
    FixedMaxDropdownItems (PositiveInt.new 6)


three =
    FixedMaxDropdownItems (PositiveInt.new 3)


equalOptionListValues : List Option.Option -> List Option.Option -> Expect.Expectation
equalOptionListValues optionsA optionsB =
    Expect.equalLists
        (List.map Option.getOptionValue optionsA)
        (List.map Option.getOptionValue optionsB)


selectionConfig =
    defaultSelectionConfig


selectionConfigMaxDropdownItemsTen =
    selectionConfig |> SelectionMode.setMaxDropdownItems ten


selectionConfigMaxDropdownItemsNine =
    selectionConfig |> SelectionMode.setMaxDropdownItems nine


selectionConfigMaxDropdownItemsSix =
    selectionConfig |> SelectionMode.setMaxDropdownItems six


selectionConfigMaxDropdownItemsFive =
    selectionConfig |> SelectionMode.setMaxDropdownItems five


selectionConfigMaxDropdownItemsThree =
    selectionConfig |> SelectionMode.setMaxDropdownItems three


searchStringMinLengthTwo =
    FixedSearchStringMinimumLength (PositiveInt.new 2)


multiSelectConfig =
    defaultSelectionConfig
        |> SelectionMode.setSelectionMode SelectionMode.MultiSelect
        |> SelectionMode.setSearchStringMinimumLength searchStringMinLengthTwo


suite : Test
suite =
    describe "Calculate which options to show in the dropdown"
        [ describe "when we have fewer options than the max"
            [ test "it should show all the options if nothing in highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsTen tools)
                        tools
            , test "it should show no options if the list is empty" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsTen [])
                        []
            , test "it shows all the options even if something is highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsTen (highlightOptionInList wrench tools))
                        (highlightOptionInList wrench tools)
            ]
        , describe "when we have the same number of options as the max"
            [ test "it should show all the options if nothing in highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsNine tools)
                        tools
            , test "it should show no options if the list is empty" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsNine [])
                        []
            , test "it shows all the options even if something is highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsNine (highlightOptionInList wrench tools))
                        (highlightOptionInList wrench tools)
            ]
        , describe "when we have more options than the max (which is odd)"
            [ test "it should show all the maximum number of options starting at the start of the list if nothing in highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsFive tools)
                        [ screwDriver
                        , drill
                        , multiMeter
                        , sawZaw
                        , wrench
                        ]
            , test "it shows the options around the highlighted option" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsFive (highlightOptionInList wrench tools))
                        (highlightOptionInList wrench
                            [ multiMeter
                            , sawZaw
                            , wrench
                            , hammer
                            , chisel
                            ]
                        )
            , test "it shows the maximum number of options before the highlighted option if the highlighted option is the last one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsFive (highlightOptionInList xActoKnife tools))
                        (highlightOptionInList xActoKnife
                            [ wrench
                            , hammer
                            , chisel
                            , signalTester
                            , xActoKnife
                            ]
                        )
            , test "it shows the maximum number of options but offset if the highlighted option is just after the first one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsFive (highlightOptionInList drill tools))
                        (highlightOptionInList drill
                            [ screwDriver
                            , drill
                            , multiMeter
                            , sawZaw
                            , wrench
                            ]
                        )
            , test "it shows the maximum number of options but offset if the highlighted option is just before the last one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsFive (highlightOptionInList signalTester tools))
                        (highlightOptionInList signalTester
                            [ wrench
                            , hammer
                            , chisel
                            , signalTester
                            , xActoKnife
                            ]
                        )
            ]
        , describe "when we have more options than the max (which is even)"
            [ test "it should show all the maximum number of options starting at the start of the list if nothing in highlighted" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsSix tools)
                        [ screwDriver
                        , drill
                        , multiMeter
                        , sawZaw
                        , wrench
                        , hammer
                        ]
            , test "it shows the options around the highlighted option, but with an extra option after the highlighted option" <|
                \_ ->
                    Expect.equalLists
                        (highlightOptionInList wrench
                            [ multiMeter
                            , sawZaw
                            , wrench
                            , hammer
                            , chisel
                            , signalTester
                            ]
                        )
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsSix (highlightOptionInList wrench tools))
            , test "it shows the maximum number of options before the highlighted option if the highlighted option is the last one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsSix (highlightOptionInList xActoKnife tools))
                        (highlightOptionInList xActoKnife
                            [ sawZaw
                            , wrench
                            , hammer
                            , chisel
                            , signalTester
                            , xActoKnife
                            ]
                        )
            , test "it shows the maximum number of options but offset if the highlighted option is just after the first one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsSix (highlightOptionInList drill tools))
                        (highlightOptionInList drill
                            [ screwDriver
                            , drill
                            , multiMeter
                            , sawZaw
                            , wrench
                            , hammer
                            ]
                        )
            , test "it shows the maximum number of options but offset if the highlighted option is just before the last one" <|
                \_ ->
                    Expect.equalLists
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsSix (highlightOptionInList signalTester tools))
                        (highlightOptionInList signalTester
                            [ sawZaw
                            , wrench
                            , hammer
                            , chisel
                            , signalTester
                            , xActoKnife
                            ]
                        )
            ]
        , describe "when we only have a selected option (nothing in highlighted)"
            [ test "it should show the options around the selected option" <|
                \_ ->
                    Expect.equalLists
                        (selectOptionInList wrench
                            [ sawZaw
                            , wrench
                            , hammer
                            ]
                        )
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsThree (selectOptionInList wrench tools))
            ]
        , describe "when we have options that are selected and highlighted"
            [ test "it should show the options around the highlighted option" <|
                \_ ->
                    Expect.equalLists
                        (highlightOptionInList wrench
                            [ sawZaw
                            , wrench
                            , hammer
                            ]
                        )
                        (figureOutWhichOptionsToShowInTheDropdown selectionConfigMaxDropdownItemsThree
                            (tools
                                |> selectOptionInList xActoKnife
                                |> highlightOptionInList wrench
                            )
                        )
            ]
        , describe "if there are strong matches"
            [ test "we should hide everything else" <|
                \_ ->
                    equalOptionListValues
                        (highlightOptionInList wrench
                            [ wrench
                            ]
                        )
                        (figureOutWhichOptionsToShowInTheDropdown multiSelectConfig
                            (tools
                                |> OptionSearcher.updateOptionsWithSearchStringAndCustomOption
                                    multiSelectConfig
                                    (SearchString.update "wrench")
                                |> highlightOptionInList wrench
                            )
                        )
            ]
        ]
