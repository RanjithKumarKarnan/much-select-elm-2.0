module ConfigDump exposing (..)

import Json.Encode
import OptionSorting exposing (OptionSort)
import OutputStyle exposing (CustomOptions(..))
import PositiveInt
import RightSlot exposing (RightSlot)
import SelectedValueEncoding exposing (SelectedValueEncoding)
import SelectionMode exposing (SelectionConfig, getCustomOptions)


encodeConfig : SelectionConfig -> OptionSort -> SelectedValueEncoding -> RightSlot -> Json.Encode.Value
encodeConfig selectionConfig optionSort selectedValueEncoding rightSlot =
    Json.Encode.object
        [ ( "allows-custom-options"
          , Json.Encode.bool
                (case getCustomOptions selectionConfig of
                    AllowCustomOptions _ _ ->
                        True

                    NoCustomOptions ->
                        False
                )
          )
        , ( "disabled", Json.Encode.bool (SelectionMode.isDisabled selectionConfig) )
        , ( "events-only", Json.Encode.bool (SelectionMode.isEventsOnly selectionConfig) )
        , ( "loading", Json.Encode.bool (RightSlot.isLoading rightSlot) )
        , ( "max-dropdown-items"
          , Json.Encode.int
                (case SelectionMode.getMaxDropdownItems selectionConfig of
                    OutputStyle.FixedMaxDropdownItems i ->
                        PositiveInt.toInt i

                    OutputStyle.NoLimitToDropdownItems ->
                        0
                )
          )
        , ( "multi-select"
          , Json.Encode.bool
                (case SelectionMode.getSelectionMode selectionConfig of
                    SelectionMode.MultiSelect ->
                        True

                    SelectionMode.SingleSelect ->
                        False
                )
          )
        , ( "option-sorting"
          , Json.Encode.string (OptionSorting.toString optionSort)
          )
        , ( "output-style"
          , Json.Encode.string (SelectionMode.outputStyleToString (SelectionMode.getOutputStyle selectionConfig))
          )
        , ( "search-string-minimum-length"
          , Json.Encode.int
                (case SelectionMode.getSearchStringMinimumLength selectionConfig of
                    OutputStyle.NoMinimumToSearchStringLength ->
                        0

                    OutputStyle.FixedSearchStringMinimumLength positiveInt ->
                        PositiveInt.toInt positiveInt
                )
          )
        , ( "selected-value-encoding"
          , Json.Encode.string (SelectedValueEncoding.toString selectedValueEncoding)
          )
        , ( "show-dropdown-footer"
          , Json.Encode.bool (SelectionMode.showDropdownFooter selectionConfig)
          )
        , ( "single-item-removal"
          , Json.Encode.bool
                (case SelectionMode.getSingleItemRemoval selectionConfig of
                    OutputStyle.EnableSingleItemRemoval ->
                        True

                    OutputStyle.DisableSingleItemRemoval ->
                        False
                )
          )
        ]
