module SelectionMode exposing
    ( CustomOptions(..)
    , OutputStyle(..)
    , SelectedItemPlacementMode(..)
    , SelectionMode(..)
    , SingleItemRemoval(..)
    , getCustomOptions
    , getOutputStyle
    , getSelectedItemPlacementMode
    , setAllowCustomOptionsWithBool
    , setMultiSelectModeWithBool
    , setSelectedItemStaysInPlace
    , stringToOutputStyle
    )


type CustomOptions
    = AllowCustomOptions
    | NoCustomOptions


type OutputStyle
    = CustomHtml
    | Datalist


type SingleItemRemoval
    = EnableSingleItemRemoval
    | DisableSingleItemRemoval


type SelectionMode
    = SingleSelect CustomOptions SelectedItemPlacementMode OutputStyle
    | MultiSelect CustomOptions SingleItemRemoval OutputStyle


type SelectedItemPlacementMode
    = SelectedItemStaysInPlace
    | SelectedItemMovesToTheTop


getCustomOptions : SelectionMode -> CustomOptions
getCustomOptions selectionMode =
    case selectionMode of
        SingleSelect customOptions _ _ ->
            customOptions

        MultiSelect customOptions _ _ ->
            customOptions


setAllowCustomOptionsWithBool : Bool -> SelectionMode -> SelectionMode
setAllowCustomOptionsWithBool bool mode =
    case mode of
        SingleSelect _ selectedItemPlacementMode outputStyle ->
            if bool then
                SingleSelect AllowCustomOptions selectedItemPlacementMode outputStyle

            else
                SingleSelect NoCustomOptions selectedItemPlacementMode outputStyle

        MultiSelect _ singleItemRemoval outputStyle ->
            if bool then
                MultiSelect AllowCustomOptions singleItemRemoval outputStyle

            else
                MultiSelect NoCustomOptions singleItemRemoval outputStyle


getSelectedItemPlacementMode : SelectionMode -> SelectedItemPlacementMode
getSelectedItemPlacementMode selectionMode =
    case selectionMode of
        SingleSelect _ selectedItemPlacementMode _ ->
            selectedItemPlacementMode

        MultiSelect _ _ _ ->
            SelectedItemStaysInPlace


setSelectedItemStaysInPlace : Bool -> SelectionMode -> SelectionMode
setSelectedItemStaysInPlace selectedItemStaysInPlace selectionMode =
    case selectionMode of
        SingleSelect customOptions _ outputStyle ->
            if selectedItemStaysInPlace then
                SingleSelect customOptions SelectedItemStaysInPlace outputStyle

            else
                SingleSelect customOptions SelectedItemMovesToTheTop outputStyle

        MultiSelect _ _ _ ->
            selectionMode


setMultiSelectModeWithBool : Bool -> SelectionMode -> SelectionMode
setMultiSelectModeWithBool isInMultiSelectMode selectionMode =
    case selectionMode of
        SingleSelect customOptions _ outputStyle ->
            if isInMultiSelectMode then
                MultiSelect customOptions DisableSingleItemRemoval outputStyle

            else
                selectionMode

        MultiSelect customOptions _ outputStyle ->
            if isInMultiSelectMode then
                selectionMode

            else
                SingleSelect customOptions SelectedItemStaysInPlace outputStyle


stringToOutputStyle : String -> Result String OutputStyle
stringToOutputStyle string =
    case string of
        "customHtml" ->
            Ok CustomHtml

        "datalist" ->
            Ok Datalist

        _ ->
            Err "Invalid output style"


getOutputStyle : SelectionMode -> OutputStyle
getOutputStyle selectionMode =
    case selectionMode of
        SingleSelect _ _ outputStyle ->
            outputStyle

        MultiSelect _ _ outputStyle ->
            outputStyle
