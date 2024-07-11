<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function Faq()
    {
        $file = public_path('/files/Wiconnekt_FAQ.csv');
        $csvData = file_get_contents($file);

        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        return Inertia::render('Faq', [
            'rows' => $rows
        ]);
    }
    public function Adsl()
    {
        $file = public_path('/files/wiconnekt_ADLS_Prices.csv');
        $csvData = file_get_contents($file);

        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        return Inertia::render('ADSL/Adsl', [
            'items' => $rows
        ]);
    }
    public function Telkom()
    {
        $file = public_path('/files/wiconnekt_Telkom_Prices.csv');
        $csvData = file_get_contents($file);

        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        return Inertia::render('LTE/Telkom', [
            'items' => $rows
        ]);
    }
    public function MTN()
    {
        $file = public_path('/files/wiconnekt_MTN_Prices.csv');
        $csvData = file_get_contents($file);

        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        return Inertia::render('LTE/MTN', [
            'items' => $rows
        ]);
    }
    public function Voip()
    {
        $file = public_path('/files/wiconnekt_Voip_Prices.csv');
        $csvData = file_get_contents($file);

        $rows = array_map("str_getcsv", explode("\n", $csvData));
        $header = array_shift($rows);

        return Inertia::render('VOIP/voip', [
            'items' => $rows
        ]);
    }
}
