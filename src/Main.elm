module Main exposing (..)

import Browser
import Css exposing (absolute, backgroundColor, color, cursor, display, float, fontSize, height, hex, inlineBlock, left, minWidth, padding, pointer, position, px, relative, rgb, top)
import Html.Styled exposing (Html, div, input, text, toUnstyled)
import Html.Styled.Attributes exposing (class, css, type_)
import Html.Styled.Events exposing (onBlur, onFocus, onMouseOut, onMouseOver)


type Msg
    = InputBlur
    | InputFocus
    | DropdownMouseOverOption Option
    | DropdownMouseOutOption Option


type alias Model =
    { name : String
    , options : List Option
    , showDropdown : Bool
    }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        InputBlur ->
            ( { model | showDropdown = False }, Cmd.none )

        InputFocus ->
            ( { model | showDropdown = True }, Cmd.none )

        DropdownMouseOverOption option ->
            ( { model | options = highlightOptionInList option model.options }, Cmd.none )

        DropdownMouseOutOption option ->
            ( { model | options = removeHighlightOptionInList option model.options }, Cmd.none )


view : Model -> Html Msg
view model =
    div [ css [ position relative ] ]
        [ input
            [ type_ "text"
            , onBlur InputBlur
            , onFocus InputFocus
            , css [ height (px 40), fontSize (px 25) ]
            ]
            []
        , dropdown model
        ]


dropdown : Model -> Html Msg
dropdown model =
    if model.showDropdown then
        div
            [ css
                [ backgroundColor (hex "EEEEEE")
                , display inlineBlock
                , padding (px 5)
                , position absolute
                , top (px 50)
                , left (px 0)
                , fontSize (px 20)
                , minWidth (px 200)
                ]
            ]
            (List.map optionToDropdownOption model.options)

    else
        text ""


optionToDropdownOption : Option -> Html Msg
optionToDropdownOption option =
    case getOptionDisplay option of
        OptionShown ->
            div
                [ onMouseOver (DropdownMouseOverOption option)
                , onMouseOut (DropdownMouseOutOption option)
                , css [ backgroundColor (rgb 255 255 255), padding (px 5), cursor pointer ]
                ]
                [ text (getOptionLabelString option) ]

        OptionHidden ->
            text ""

        OptionSelected ->
            div
                [ onMouseOver (DropdownMouseOverOption option)
                , onMouseOut (DropdownMouseOutOption option)
                , class "selected"
                , css [ backgroundColor (hex "111111"), color (hex "EEEEEE"), padding (px 5), cursor pointer ]
                ]
                [ text (getOptionLabelString option) ]

        OptionHighlighted ->
            div
                [ onMouseOver (DropdownMouseOverOption option)
                , onMouseOut (DropdownMouseOutOption option)
                , class "highlighted"
                , css [ backgroundColor (hex "111111"), color (hex "EEEEEE"), padding (px 5), cursor pointer ]
                ]
                [ text (getOptionLabelString option) ]


type alias Flags =
    { name : String }


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { name = flags.name
      , options =
            [ newOption "Red"
            , newOption "Yellow"
            , newOption "Orange"
            , newOption "Green"
            , newOption "Blue"
            , newOption "Purple"
            ]
      , showDropdown = False
      }
    , Cmd.none
    )


main : Program Flags Model Msg
main =
    Browser.element
        { init = init, update = update, subscriptions = \_ -> Sub.none, view = view >> toUnstyled }


type OptionDisplay
    = OptionShown
    | OptionHidden
    | OptionSelected
    | OptionHighlighted


type OptionLabel
    = OptionLabel String


optionLabelToString : OptionLabel -> String
optionLabelToString optionLabel =
    case optionLabel of
        OptionLabel label ->
            label


type OptionValue
    = OptionValue String


type Option
    = Option OptionDisplay OptionLabel OptionValue


newOption : String -> Option
newOption string =
    Option OptionShown (OptionLabel string) (OptionValue string)


getOptionDisplay : Option -> OptionDisplay
getOptionDisplay (Option display _ _) =
    display


getOptionLabelString : Option -> String
getOptionLabelString (Option _ label _) =
    optionLabelToString label


highlightOptionInList : Option -> List Option -> List Option
highlightOptionInList option options =
    List.map
        (\o ->
            if o == option then
                highlightOption option

            else
                o
        )
        options


removeHighlightOptionInList : Option -> List Option -> List Option
removeHighlightOptionInList option options =
    List.map
        (\o ->
            if o == option then
                removeHighlightOption option

            else
                o
        )
        options


highlightOption : Option -> Option
highlightOption (Option _ label value) =
    Option OptionHighlighted label value


removeHighlightOption : Option -> Option
removeHighlightOption (Option _ label value) =
    Option OptionShown label value
