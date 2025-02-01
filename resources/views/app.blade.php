<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">

    <title inertia>{{ config('app.name', 'Home') }}</title>

    <style>
        #page-content {
            position: relative;
            background-image: linear-gradient(to right, #00b6de, #00b6de 16.66%, #ed5f4a 16.66%, #ed5f4a 33.32%, #f5ae3d 33.32%, #f5ae3d 50%, #aac713 50%, #aac713 66.66%, #f5cb87 66.66%, #f5cb87 83.32%, #848891 83.32%);
            background-size: 1600px 6px;
            background-position: center top;
            background-repeat: no-repeat;
            padding: 20px 0 3px;
            overflow: hidden;
        }

        .aboutList li {
            list-style: disc;
            padding-block: 0.5rem
        }

        .aboutRightUl {
            padding-block: 10px;
            padding-inline: 10px
        }

        .aboutRightUl li {
            position: relative;
            padding-left: 24px;
            font-size: 14px;
            margin-block: 5px
        }

        .aboutRightUl li::before {
            position: absolute;
            top: 8px;
            left: 0;
            font-weight: 900;
            font-family: FontAwesome;
            font-size: 18px;
            font-weight: normal;
            line-height: 1;
            color: #ed5f4a;
            content: "✔";
        }

        .trapezium-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 25%;
            height: 100%;
            z-index: 1;

        }

        .trapezium-bg:before {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            content: "";
            background: url('https://www.uhpc.co.uk/images/backgrounds/hero-image-triangle-bg-2x.png') no-repeat right bottom;
            z-index: 5;
        }

        .trapezium-bg span {
            position: absolute;
            display: block;
            top: 0;
            left: 0;
            right: 0;
            height: 0;
            border-bottom: 225px solid #73798c;
            border-right: 79px solid transparent;
            border-right-color: transparent !important;
            opacity: 0.55;
        }

        .trapezium-bg:after {
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 160px;
            content: "";
            background: url('https://www.uhpc.co.uk/images/backgrounds/hero-image-triangle-bg-2x.png') repeat right top;
            z-index: 4;
        }

        .imgholder {
            min-height: 228px;
            transition: all 0.3s ease-in-out;
        }

        .imgholder img {
            width: 100%;
        }

        .category {
            height: 203px;
            width: 203px;
            flex: 1 0 203px;
            max-width: 221px;
            text-align: center;
            font-size: 15px;
            position: relative;
            margin: 0.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-size: 100% !important;
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

        }

        article.active button {
            color: #111 !important;
            font-size: 18px !important;
            font-weight: 700 !important;
        }

        article.active .login-page8-fields {
            box-shadow: 1px 1px 10px 2px #c0c0c0
        }

        .login-page8-inner main>article .login-page8-fields {
            margin-top: 36px !important;

        }



        .stripe .stripe-upper-bg {
            position: absolute;
            display: block;
            left: 0;
            top: 0;
            z-index: -1;

            width: 100%;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .stripe-dark-colored-gradient-bg {
            background-color: #5d6275;
            background: #5f73c2 linear-gradient(135deg, rgba(93, 98, 117, 0), #5d6275 30%, #5d6275 70%, rgba(93, 98, 117, 0));
        }

        .stripe-narrow {
            padding: 50px 0;
        }

        .stripe {
            position: relative;
            margin: 60px 0;
            /* padding: 80px 0; */
        }

        .stripe-dark-colored-gradient-bg .stripe-upper-bg {
            background-image: linear-gradient(135deg, rgba(235, 172, 70, 0.4), rgba(235, 172, 70, 0) 30%, rgba(235, 172, 70, 0) 70%, rgba(235, 172, 70, 0.4));
        }

        .stripe .stripe-upper-bg:after,
        .stripe .stripe-upper-bg:before {
            position: absolute;
            display: block;
            left: 0;
            width: 100%;
            height: 50px;
            content: "";
        }

        .stripe.diagonal-pinstripe-bg .stripe-upper-bg:after {
            position: absolute;
            display: block;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            content: "";
            /* background: url('https://www.iphm.co.uk/images/backgrounds/diag-lines-pattern.svg') repeat left top; */
            opacity: 0.2;
        }

        .stripe.diagonal-pinstripe-bg .stripe-upper-bg:after {
            background-image: url('/images/laravel-react-template.svg');
        }

        .stripe+.stripe {
            margin-top: -60px;
        }
        .stripe {
    position: relative;
    margin: 60px 0;
    padding: 80px 0;
}

.stripe.v-notch:after {
    position: absolute;
    left: 50%;
    top: 0;
    width: 0;
    height: 0;
    margin-left: -35px;
    content: "";
    border-top: 25px solid #fff;
    border-left: 35px solid transparent;
    border-right: 35px solid transparent;
}

.stripe-dark-colored-gradient-bg+.stripe.v-notch:after {
    --primary-color4: #5d6275;
    border-top-color: var(--primary-color4);
}

.FormBuilder, .InputfieldForm, .InputfieldForm input, .InputfieldForm select, .InputfieldForm textarea, .ui-widget, button {
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5em;
    box-sizing: border-box;
}
.InputfieldForm {

    margin: 1rem 5rem;
    padding: 2.5rem 2rem 2rem;
    border-radius: 0.4rem;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.12);
    background-color: white;
    width: 75%;
}

.FormBuilder, .InputfieldForm, .InputfieldForm input, .InputfieldForm select, .InputfieldForm textarea, .ui-widget, button {
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 14px;
    line-height: 1.5em;
    box-sizing: border-box;
}

.InputfieldForm, .InputfieldForm *, .InputfieldForm *:before, .InputfieldForm *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.InputfieldForm .Inputfields {
    height: auto;
    list-style: none;
    padding: 0;
}
.InputfieldForm, .InputfieldForm *, .InputfieldForm *:before, .InputfieldForm *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.InputfieldForm .InputfieldFieldset:not(.InputfieldColumnWidth) {
    clear: both;
}

@media only screen and (max-width: 479px) {
    .InputfieldFormWidths .Inputfield {
        clear: both !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-bottom: 1em !important;
    }
}
.InputfieldForm fieldset {
    border: 1px solid #ccc;
    border-radius: 0.2rem;
    padding: 1rem;
}
.InputfieldForm .Inputfield {
    list-style: none;
    display: block;
}

.InputfieldForm fieldset, .InputfieldForm .InputfieldFieldset {
    margin: 0 0 1.5em 0;
    padding-bottom: 0;
}
.InputfieldForm legend {
    font-size: 1.5rem;
    color: #0e2791;
    font-weight: 600;
    display: inline-block;
    padding-bottom: 0.2rem;
}

@media only screen and (max-width: 479px) {
    .Inputfield .InputfieldContent, .Inputfield .InputfieldHeader {
        padding-left: 0 !important;
        padding-right: 0 !important;
        float: none !important;
        width: 100%;
    }
}
.Inputfields>.Inputfield>.InputfieldContent:before, .Inputfields>.Inputfield>.InputfieldContent:after, .InputfieldForm:after {
    content: " ";
    display: table;
}
.InputfieldForm .Inputfields {
    height: auto;
    list-style: none;
    padding: 0;
}
.InputfieldForm .Inputfield:not(fieldset) {
    padding: 0;
}
@media only screen and (max-width: 479px) {
    .InputfieldFormWidths .Inputfield {
        clear: both !important;
        width: 100% !important;
        margin-left: 0 !important;
        margin-bottom: 1em !important;
    }
}
.InputfieldForm label {
    color: #0e2791;
    font-weight: 600;
    display: inline-block;
    padding-bottom: 0.2rem;
}
@media only screen and (max-width: 479px) {
    .Inputfield .InputfieldContent, .Inputfield .InputfieldHeader {
        padding-left: 0 !important;
        padding-right: 0 !important;
        float: none !important;
        width: 100%;
    }
}

.InputfieldForm input[type=email], .InputfieldForm input[type=number], .InputfieldForm input[type=text], .InputfieldForm input[type=url], .InputfieldForm select, .InputfieldForm textarea {
    border: none;
    background: whitesmoke;
    padding: 0.75rem;
    width: 100%;
    margin-block: 1rem;
    border-radius: 0.2rem;
}

.InputfieldForm button {
    background-color: #3e4d87;
    border: 2px solid #3e4d87;
    color: white;
    padding: 0.75rem 1.5rem;
    transition: all 0.2s;
    font-weight: 600;
    cursor: pointer;
}
    </style>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/react/App.tsx'])
</head>

<body>
    <div id="mainApp"></div>
    <script>
        window.Laravel = {!! json_encode([
            'asset_url' => asset('storage'), // or any other public folder, such as 'assets', 'css', etc.
        ]) !!};
    </script>

</body>

</html>
