module Option.Deselecting exposing (suite)

import Expect
import Option exposing (deselectAllOptionsInOptionsList, deselectOption, deselectOptions, newCustomOption, newOption, selectOption, selectOptionInListByOptionValue, stringToOptionValue)
import Test exposing (Test, describe, test)


buzzCola =
    newOption "Buzz Cola" Nothing


krustyBurger =
    newOption "Krusty Burger" Nothing


lardLad =
    newOption "Lard Lad" Nothing


squishee =
    newOption "Squishee" Nothing


brands =
    [ buzzCola, krustyBurger, lardLad, squishee ]


suite : Test
suite =
    describe "Deselecting"
        [ test "all the selected option" <|
            \_ ->
                Expect.equalLists
                    (brands
                        |> selectOptionInListByOptionValue (stringToOptionValue "Krusty Burger")
                        |> selectOptionInListByOptionValue (stringToOptionValue "Lard Lad")
                        |> deselectAllOptionsInOptionsList
                    )
                    [ buzzCola
                    , krustyBurger
                    , lardLad
                    , squishee
                    ]
        , test "all the selected options in a list" <|
            \_ ->
                Expect.equalLists
                    (brands
                        |> selectOptionInListByOptionValue (stringToOptionValue "Buzz Cola")
                        |> selectOptionInListByOptionValue (stringToOptionValue "Krusty Burger")
                        |> selectOptionInListByOptionValue (stringToOptionValue "Lard Lad")
                        |> deselectOptions [ buzzCola, krustyBurger ]
                    )
                    [ buzzCola
                    , krustyBurger
                    , selectOption 2 lardLad
                    , squishee
                    ]
        ]
