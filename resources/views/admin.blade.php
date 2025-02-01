<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <style>


.input-tag {
  background: white;
  /* border: 1px solid #d6d6d6; */
  border-radius: 2px;
  display: flex;
  flex-wrap: wrap;
  /* padding: 5px 5px 0; */
}

.input-tag input {
  border: none;
  width: 100%;
  outline: none;
  color: #000;
}

.input-tag__tags {
  display: inline-flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
}

.input-tag__tags li {
  align-items: center;
  background: #85a3bf;
  border-radius: 2px;
  color: white;
  display: flex;
  font-weight: 300;
  list-style: none;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 10px;
}

.input-tag__tags li button {
  align-items: center;
  appearance: none;
  background: #333333;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  display: inline-flex;
  font-size: 12px;
  height: 15px;
  justify-content: center;
  line-height: 0;
  margin-left: 8px;
  padding: 0;
  transform: rotate(45deg);
  width: 15px;
}

.input-tag__tags li.input-tag__tags__input {
  background: none;
  flex-grow: 1;
  padding: 0;
}

    </style>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite('resources/admin/App.tsx')

    {{-- @vite(['resources/admin/App.tsx', "resources/admin/Pages/{$page['component']}.tsx"]) --}}
    {{-- @inertiaHead --}}
</head>
<body>
    <div id="adminApp"></div>

    <script>
      window.Laravel = {!! json_encode([
          'asset_url' => asset('storage'), // or any other public folder, such as 'assets', 'css', etc.
      ]) !!};
  </script>
</body>
</html>
