<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Directory;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $menuItems = [
            [
                'id' => 1,
                'title' => 'Home',
                'uri' => '/',
                'children' => null,
            ],
            [
                'id' => 2,
                'title' => 'About US',
                'uri' => '/about-us',
                'children' => null,    
            ],
            [
                'id' => 3,
                'title' => 'About UHPC',
                'uri' => '/about-uhpc',
                'children' => 2, 
            ],
            [
                'id' => 4,
                'title' => 'Modalities Covered',
                'uri' => '/modalities-covered',
                'children' => 2,
            ],
            [
                'id' => 5,
                'title' => 'Directory',
                'uri' => '/directory',
                'children' => null,
                
            ],
            [
                'id' => 6,
                'title' => 'Find a Practitioner',
                'uri' => '/find-a-practitioner',
                'children' => 5,
            ],
            [
                'id' => 7,
                'title' => 'Find a Training Provider',
                'uri' => '/find-a-training-provider',
                'children' => 5,
            ],
            [
                'id' => 8,
                'title' => 'Join UHPC',
                'uri' => '/join-uhpc',
                'children' => null,
            ],
            [
                'id' => 9,
                'title' => 'Holistic',
                'uri' => '/holistic',
                'children' => 8,
            ],
            [
                'id' => 10,
                'title' => 'Beauty',
                'uri' => '/beauty',
                'children' => 8,
            ],
            [
                'id' => 11,
                'title' => 'Resources',
                'uri' => '/resources',
                'children' => null,
            ],
            [
                'id' => 13,
                'title' => 'UHPC Blog',
                'uri' => '/uhpc-blog',
                'children' => 11,
            ],
            [
                'id' => 14,
                'title' => 'UHPC Standards',
                'uri' => '/uhpc-standards',
                'children' => 11,
            ],
            [
                'id' => 15,
                'title' => 'Events',
                'uri' => '/events',
                'children' => null,
            ],
            [
                'id' => 16,
                'title' => 'Find a Workshop or Event',
                'uri' => '/find-a-workshop-or-event',
                'children' => 15,
            ],
            [
                'id' => 17,
                'title' => 'Contact US',
                'uri' => '/contact-us',
                'children' => null,
            ]
        ];
      
        Directory::insert($menuItems);
    }
}
