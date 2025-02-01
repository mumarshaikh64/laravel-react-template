<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Directory;


class DirectoryController extends Controller
{
    // Display a list of directories
    public function index()
    {
        $directories = Directory::with('parent')->get();
        return response()->json($directories);
    }
    public function showWeb()
    {
        $directories = Directory::with('children12')->where("children", null)->get();
        return response()->json($directories);
    }

    // Store a newly created directory
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'uri' => 'required|string|unique:directories',
        ]);

        $directory = Directory::create($request->all());
        return response()->json($directory, 200); // Return the created directory
    }

    // Show a specific directory
    public function show(Directory $directory)
    {
        return response()->json($directory);
    }

    // Update a directory
    public function update(Request $request, Directory $directory)
    {
        $request->validate([
            'title' => 'required|string',
            'uri' => 'required|string|unique:directories,uri,' . $directory->id,
            'children' => 'nullable|array',
        ]);

        $directory->update($request->all());
        return response()->json($directory);
    }

    // Delete a directory
    public function destroy(Directory $directory)
    {
        $directory->delete();
        return response()->json(['message' => 'Directory deleted successfully']);
    }




    public function getEvents()
    {
        // Place your HTML content here
        $html = '
        <div class="col grid sm:grid-cols-2 gap-6 pb-8 mb-8 border-b-4 border-b-amber-600/20 border-solid">
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/reiki-level-1-2-attunement/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16806/circle_cards_2.318x212.1732717552.png"
                    alt="Reiki Level 1 &amp; 2 ATTUNEMENT" width="212" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Reiki Level 1 &amp; 2 ATTUNEMENT</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>7 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Learn Reiki levels 1 &amp; 2 and heal yourself and others. This training is
                accredited by both the guild and UHPC. You are required to study the…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/reiki-level-1-2-attunement/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/channeled-guided-meditation-online/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16982/nasa-rtzw4f02zy8-unsplash_1.318x212.1735901743.jpg"
                    alt="Channeled Guided Meditation - Online" width="224" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Channeled Guided Meditation - Online</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>7 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Enter a space to channelled messages and guidance for a self journey from
                the comfort of your own home. Join me on Zoom where I will take you on a…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/channeled-guided-meditation-online/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/blue-star-lemurian-reiki-1-masters/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16807/lemurian_beings.318x212.1732717552.jpg"
                    alt="Blue Star Lemurian Reiki 1-Masters" width="175" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Blue Star Lemurian Reiki 1-Masters</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>8 Jan 2025</div>
            </div>
            <p class="font-semibold italic">LEMURIA WAS SEEDED BY MANY STAR SYSTEMS including Pleiades, Sirius, Venus,
                and more. My Light of Lemuria attunement is more connected to Sirius and…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/blue-star-lemurian-reiki-1-masters/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a
            href="/resources/workshops-events/sound-bath-for-deep-relaxation-at-thrive-wellbeing-hub-hampden-road-sale-m33-7ub/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16904/sound_bath_at_thrive_08_11_2024.318x212.1734435900.jpg"
                    alt="Sound Bath for Deep Relaxation at Thrive Wellbeing Hub, Hampden Road, Sale, M33 7UB"
                    width="282" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Sound Bath for Deep Relaxation at Thrive…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>10 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Start your weekend off by soaking in beautiful healing sounds to calm the
                mind, relax the body, and connect with Spirit. Sound Bath for Deep…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/sound-bath-for-deep-relaxation-at-thrive-wellbeing-hub-hampden-road-sale-m33-7ub/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/dowsing-in-the-caves/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16868/kents_cavern_dowsing_in_the_caves_logo.318x212.1733838841.png"
                    alt="Dowsing In The Caves" width="283" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Dowsing In The Caves</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>11 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Come Dowse with Me! Dowsing in the Depths of Kents Cavern … Join Jane
                Taylor, professional dowser and co-host of Come Dowse With Me for a unique…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a href="/resources/workshops-events/dowsing-in-the-caves/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/formation-aromatherapie-animale/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16153/formation_aromatherapie_animal_facebook_post_2.318x212.1725621074.jpg"
                    alt="Formation Aromathérapie Animale" width="253" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Formation Aromathérapie Animale</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>16 Oct 2024 - 15 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Êtes-vous prêt(e) à entreprendre un voyage enrichissant dans le monde de
                l aromathérapie animale? Je suis ravie de vous lancer cette invitation à ma…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/formation-aromatherapie-animale/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/upcoming-first-aid-courses/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16826/hands.318x212.1733162639.png" alt="Upcoming First Aid courses"
                    width="318" height="121" class="img p-1 bg-white shadow-sm"></div>
            <h3>Upcoming First Aid courses</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>6 Dec 2024 - 24 Jan 2025</div>
            </div>
            <p class="font-semibold italic">• Emergency First Aid at work - Friday 6th December 09:30 - 16:30 … • First
                Aid at Work - Wednesday 11th&nbsp;- Friday 13th December 09:30 - 16:30 … •…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/upcoming-first-aid-courses/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/accredited-foot-reflexology/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16808/uhpc-logo-horizontal-trainingprovider.318x212.1733838842.jpg"
                    alt="Accredited foot reflexology" width="318" height="159" class="img p-1 bg-white shadow-sm"></div>
            <h3>Accredited foot reflexology</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>26 Jan 2025</div>
            </div>
            <p class="font-semibold italic">The Foot Reflexology course is fully accredited … Once you have booked your
                training course and paid the enrolment and theory fee of £50 you will be…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/accredited-foot-reflexology/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/indian-head-massage-diploma/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16809/indian_head_massage.318x212.1732717553.png"
                    alt="Indian Head Massage Diploma" width="230" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Indian Head Massage Diploma</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>26 Jan 2025</div>
            </div>
            <p class="font-semibold italic">This course covers the technique for upper back, shoulder, upper arm, neck,
                scalp, and face massage. It also includes the theory behind Indian Head…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/indian-head-massage-diploma/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a
            href="/resources/workshops-events/emotional-freedom-technique-1-2-in-person-in-woodmanstern-surrey-over-2-weekends/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16715/uhpc-logo-square-trainingprovider_copy.318x212.1731593204.jpg"
                    alt="Emotional Freedom Technique 1 &amp; 2 In person IN Woodmanstern Surrey Over 2 Weekends"
                    width="210" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Emotional Freedom Technique 1 &amp; 2 In person…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>18 - 26 Jan 2025</div>
            </div>
            <p class="font-semibold italic">EFT 1 - 18th January 2025 - you can choose to do EFT 1 on its own for
                personal use or in combination with EFT 2 for more indepth and the next step to…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/emotional-freedom-technique-1-2-in-person-in-woodmanstern-surrey-over-2-weekends/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/boost-me-classic-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16635/boost_me_training_advert.318x212.1730807738.png"
                    alt="Boost Me Classic Training" width="150" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Boost Me Classic Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>27 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Comprehensive on site training at Boost Me HQ, in Accrington, Lancashire.
                Boost your business and transform your clients lives! Become certified in…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/boost-me-classic-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/110-hrs-certificate-in-ayurveda-lifestyle-therapy-april-2024-jan-2025/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/2047/event-placeholder.318x212.1721814285.jpg"
                    alt="110-hrs Certificate in Ayurveda Lifestyle Therapy : April 2024 - Jan 2025" width="150"
                    height="150" class="img p-1 bg-white shadow-sm"></div>
            <h3>110-hrs Certificate in Ayurveda Lifestyle Therapy…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>17 Apr 2024 - 31 Jan 2025</div>
            </div>
            <p class="font-semibold italic">Complete 5 modules for certification- Ayurveda, Case Studies, Reflection,
                Ethics &amp; Business Setup … Or just take the 30-hr Ayurveda course for…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/110-hrs-certificate-in-ayurveda-lifestyle-therapy-april-2024-jan-2025/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/usui-reiki-level-one-shoden-one-day-in-person-course/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16983/screenshot_2025-01-02_at_13_19_58.318x212.1735901749.png"
                    alt="Usui Reiki Level One (Shoden) | One day in person course." width="153" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Usui Reiki Level One (Shoden) | One day in person…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>1 Feb 2025</div>
            </div>
            <p class="font-semibold italic">Ready to start your healing journey? Reiki Level One is the ideal
                introduction, teaching self-healing techniques and helping you restore balance for…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/usui-reiki-level-one-shoden-one-day-in-person-course/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/sacred-cacao-ceremony-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16528/combined_cacao_training_flyer_002.318x212.1729514650.png"
                    alt="Sacred Cacao Ceremony Training" width="76" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Sacred Cacao Ceremony Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>26 Jan - 9 Feb 2025</div>
            </div>
            <p class="font-semibold italic">I am super excited to announce that I am running “Sacred Cacao Ceremony
                Training” - 26th Jan - 9th Feb 2025. Come to Guatemala with me as I combine…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/sacred-cacao-ceremony-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/online-yin-yoga-teacher-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/2047/event-placeholder.318x212.1721814285.jpg"
                    alt="Online Yin Yoga Teacher Training" width="150" height="150" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Online Yin Yoga Teacher Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>18 Jan - 9 Feb 2025</div>
            </div>
            <p class="font-semibold italic">This is a Yin-yoga teacher training course with a twist, honouring Yin’s
                ability to teach us to slow down and value our uniqueness. A fusion of…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/online-yin-yoga-teacher-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/foundation-level-hypnotherapy-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16960/hypno_1.318x212.1735565836.png"
                    alt="Foundation Level Hypnotherapy Training" width="212" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Foundation Level Hypnotherapy Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>15 Feb 2025</div>
            </div>
            <p class="font-semibold italic">Sat 8th &amp; Sun 9th February 2025 and Sat 15th &amp; Sun 16th February
                2025. Due to popular demand, Hypnotherapy training is now run on weekends…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/foundation-level-hypnotherapy-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/embodied-communication/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16979/banner_embodied_communication_facebook_cover.318x212.1735824515.jpg"
                    alt="Embodied Communication" width="318" height="180" class="img p-1 bg-white shadow-sm"></div>
            <h3>Embodied Communication</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>22 - 23 Feb 2025</div>
            </div>
            <p class="font-semibold italic">From the never-ending noise of our busy lives to the inner wisdom of the
                heart and soul we are in non stop communication with ourselves, everything…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a href="/resources/workshops-events/embodied-communication/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/ascension-retreat-february-2025/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/2047/event-placeholder.318x212.1721814285.jpg"
                    alt="Ascension Retreat February 2025" width="150" height="150" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Ascension Retreat February 2025</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>25 - 27 Feb 2025</div>
            </div>
            <p class="font-semibold italic">ASCENSION RETREAT 2025 … Embark on a transformative journey at our Ascension
                Retreat. • Our retreat aims to bring you into elevation with your…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/ascension-retreat-february-2025/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/introduction-day-to-shamanism/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16582/introduction_to_shamanism_march.318x212.1730292812.png"
                    alt="Introduction Day to Shamanism" width="212" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Introduction Day to Shamanism</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>1 Mar 2025</div>
            </div>
            <p class="font-semibold italic">Join me for a full hands-on immersive day with theory and practice to
                discover … • What Shamanism is and its origins … • How to journey for yourself…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/introduction-day-to-shamanism/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/cure-detox-special-burn-out-and-or-weigth-loss/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16824/20200808_192049_001.318x212.1732881765.jpg"
                    alt="Cure détox, spécial burn out and/or weigth loss" width="283" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Cure détox, spécial burn out and/or weigth loss</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>23 Feb - 1 Mar 2025</div>
            </div>
            <p class="font-semibold italic">A special cure is absolutely essential to get out of his daily life, family
                or professional and thus allow an absolutely essential disconnect for…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/cure-detox-special-burn-out-and-or-weigth-loss/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/diploma-in-regression-therapy-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16962/regression_therapy_training.318x212.1735566667.png"
                    alt="Diploma in Regression Therapy Training" width="212" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Diploma in Regression Therapy Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>26 Feb - 2 Mar 2025</div>
            </div>
            <p class="font-semibold italic">The Life Cycle of the Soul Regression Therapy training focuses on the ‘whole
                person’—the physical, emotional, and spiritual attributes of the person…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/diploma-in-regression-therapy-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/yoni-steam-practitioner-course/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16915/screenshot_2019-04-03_at_17_02_09.318x212.1734606007.png"
                    alt="Yoni Steam Practitioner course" width="214" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Yoni Steam Practitioner course</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>2 - 3 Mar 2025</div>
            </div>
            <p class="font-semibold italic">This is an in person training, in the ancient feminine art of yoni steaming,
                in the beautiful coastal town of wells next the sea. The training…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/yoni-steam-practitioner-course/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/facial-gua-sha/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/2047/event-placeholder.318x212.1721814285.jpg" alt="Facial Gua Sha"
                    width="150" height="150" class="img p-1 bg-white shadow-sm"></div>
            <h3>Facial Gua Sha</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>10 Mar 2025</div>
            </div>
            <p class="font-semibold italic">The Gua Sha Face Massage Pro Training is rooted in Traditional Chinese
                Medicine (TCM) principles, offering beauty therapists a holistic approach that…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a href="/resources/workshops-events/facial-gua-sha/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/energy-healing-sacred-space-practitioner-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/15191/bff7632e-788e-42ab-b65d-c2d412b8dfba.318x212.1721814319.png"
                    alt="Energy Healing &amp; Sacred Space Practitioner Training" width="212" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Energy Healing &amp; Sacred Space Practitioner…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>23 May 2024 - 21 Mar 2025</div>
            </div>
            <p class="font-semibold italic">Embark on a life changing course that will teach you how to sense energy and
                work with the subtle bodies of the human being, deepen your knowledge of…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/energy-healing-sacred-space-practitioner-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/manifest-with-the-angels/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16547/manifest_with_the_angels_workshop_zip_-_2.318x212.1729858361.png"
                    alt="Manifest with the angels" width="212" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Manifest with the angels</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>22 Mar 2025</div>
            </div>
            <p class="font-semibold italic">In the Idyllic setting of the yurt, you will meet like minded people, drink
                herbal teas and gain: ✨ A group healing experience to remove manifesting…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/manifest-with-the-angels/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/indian-head-massage-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16636/ihm_wk01_se_announcement_awg_2_days_all_a_w.318x212.1730807741.png"
                    alt="Indian Head Massage Training" width="318" height="179" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Indian Head Massage Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>23 Mar 2025</div>
            </div>
            <p class="font-semibold italic">Training in Indian Head Massage is simple and pleasurable given during a one
                day relaxing workshop. Training is open to individuals for personal use…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/indian-head-massage-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/shamanic-healing-circle/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16580/healing_circle.318x212.1730292814.png" alt="Shamanic Healing Circle"
                    width="212" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Shamanic Healing Circle</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>29 - 30 Mar 2025</div>
            </div>
            <p class="font-semibold italic">Healing Circles are not the same as “women’s circles” or the gatherings that
                have become more common in recent times. In traditional shamanic…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a href="/resources/workshops-events/shamanic-healing-circle/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/aphrodite-priestess-initiations/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/15049/aphrodite_card.318x212.1721814320.png"
                    alt="Aphrodite Priestess Initiations" width="147" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Aphrodite Priestess Initiations</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>26 Apr 2024 - 2 May 2025</div>
            </div>
            <p class="font-semibold italic">The universe buries strange jewels deep within us all, and then stands back
                to see if we can find them… Find the courage to bring forth the treasures…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/aphrodite-priestess-initiations/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/sekhem-levels-1-2-and-advanced/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16970/sekhem_banner_1.318x212.1735824520.png"
                    alt="Sekhem Levels 1, 2 and Advanced" width="318" height="179" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Sekhem Levels 1, 2 and Advanced</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>27 Apr - 3 May 2025</div>
            </div>
            <p class="font-semibold italic">“Say khem” derives from the temples of ancient Egypt, a complete energy
                system which has surfaced now to assist humanity change vibrational rate…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/sekhem-levels-1-2-and-advanced/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/healing-the-mother-wound-with-horses/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16992/1.318x212.1736170262.png" alt="Healing the Mother Wound with Horses"
                    width="164" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Healing the Mother Wound with Horses</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>28 Jan - 8 May 2025</div>
            </div>
            <p class="font-semibold italic">If you are carrying deep emotional pain or feel an imbalance in your
                relationships—especially with your mother—you may be experiencing the effects of…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/healing-the-mother-wound-with-horses/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/crystal-connections/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16548/manifest_with_the_angels_workshop_zip_-_3.318x212.1729858364.png"
                    alt="Crystal Connections" width="212" height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Crystal Connections</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>8 Jun 2025</div>
            </div>
            <p class="font-semibold italic">Come join me in the idyllic setting of The Bisley Yurt in Woking for this
                transformational workshop where you will: • connect with like minded people…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a href="/resources/workshops-events/crystal-connections/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/sacred-cacao-ceremony-training-uk/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16961/combined_uk_training_flyer.318x212.1735566668.jpg"
                    alt="Sacred Cacao Ceremony Training UK" width="43" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Sacred Cacao Ceremony Training UK</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>2 - 8 Jun 2025</div>
            </div>
            <p class="font-semibold italic">This is so much more than Cacao Ceremony/Journey Training, it is a chance to
                really get acquainted with the Spirit of Mother cacao, spend time in…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/sacred-cacao-ceremony-training-uk/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/become-a-spiritual-warrior-mentor/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16581/spiritual_warrior.318x212.1730292816.png"
                    alt="Become a Spiritual Warrior Mentor" width="212" height="212" class="img p-1 bg-white shadow-sm">
            </div>
            <h3>Become a Spiritual Warrior Mentor</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>22 Feb - 15 Jun 2025</div>
            </div>
            <p class="font-semibold italic">This course offers a transformative 13-module journey in 3 week-ends that
                guides you through Japanese shamanic practices, spiritual principles, and…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/become-a-spiritual-warrior-mentor/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/one-year-shamanic-practitioner-training-1/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/14383/year.318x212.1721814327.png"
                    alt="One Year Shamanic Practitioner Training" width="318" height="180"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>One Year Shamanic Practitioner Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>20 Apr 2024 - 22 Jun 2025</div>
            </div>
            <p class="font-semibold italic">This intense one year course has been designed combining together the Toltec
                and the Japanese tradition of shamanism, but we’ll also do rituals and…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/one-year-shamanic-practitioner-training-1/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/london-in-person-energy-healing-course/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/14060/image_1-2.318x212.1721814327.jpg"
                    alt="London In-person Energy Healing Course" width="170" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>London In-person Energy Healing Course</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>3 Feb 2024 - 27 Jul 2025</div>
            </div>
            <p class="font-semibold italic">The School of Intuition and Healing’s Energy Healing course is so much more
                than a learning opportunity, it is a life-changing experience both on a…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/london-in-person-energy-healing-course/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a
            href="/resources/workshops-events/yin-yang-yoga-teacher-training-200-hours-a-mix-of-hatha-and-yin-yoga-training/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/15398/tk_logo.318x212.1721814327.jpg"
                    alt="Yin/Yang Yoga Teacher Training 200 Hours. A mix of Hatha and Yin Yoga Training." width="212"
                    height="212" class="img p-1 bg-white shadow-sm"></div>
            <h3>Yin/Yang Yoga Teacher Training 200 Hours. A mix…</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>4 - 25 Oct 2025</div>
            </div>
            <p class="font-semibold italic">New Hybrid Yin/Yang Yoga Teacher Training Course with Tina and Keely 2025 …
                This brand new course has evolved with our love of both Hatha and Yin…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/yin-yang-yoga-teacher-training-200-hours-a-mix-of-hatha-and-yin-yoga-training/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/shamanic-practitioner-2yr-training-program/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/14049/prac3.318x212.1721814328.png"
                    alt="Shamanic Practitioner 2yr Training Program" width="212" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>Shamanic Practitioner 2yr Training Program</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>3 Feb 2024 - 1 Jan 2026</div>
            </div>
            <p class="font-semibold italic">Join this life-changing, 2-year shamanic course that delves deep into your
                mind, body, and soul. Discover the ancient practice of shamanism, allowing…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/shamanic-practitioner-2yr-training-program/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
    <div
        class="bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden">
        <a href="/resources/workshops-events/one-year-shamanic-practitioner-training-2/">
            <div class="grid place-content-center p-0 w-full text-center imgholder mb-4 overflow-hidden"><img
                    src="/site/assets/files/16583/one_year_shamanic_practitioner_training.318x212.1730292818.png"
                    alt="One Year Shamanic Practitioner Training" width="212" height="212"
                    class="img p-1 bg-white shadow-sm"></div>
            <h3>One Year Shamanic Practitioner Training</h3>
            <div
                class="event-date absolute top-0 left-0 w-full bg-amber-400 border-b-4 border-b-amber-600 border-solid text-center text-black px-4 py-1 pt-2 font-bold uppercase">
                <div>25 Oct 2025 - 27 Jun 2026</div>
            </div>
            <p class="font-semibold italic">This year-long course is designed for spiritual explorers who wish to unlock
                their full potential through intensive training in shamanic practices…</p>
        </a>
        <p class="absolute bottom-0 right-0 w-full"><a
                href="/resources/workshops-events/one-year-shamanic-practitioner-training-2/"><span
                    class="border-2 border-solid bg-white px-4 py-2">More details...</span></a></p>
    </div>
</div>
        '; // Replace with your actual HTML content

        // Load the HTML into a DOMDocument
        $dom = new \DOMDocument();
        libxml_use_internal_errors(true); // Suppress warnings due to malformed HTML
        $dom->loadHTML($html);
        libxml_clear_errors();

        // Create an array to hold the events
        $events = [];

        // Find all event containers
        $eventContainers = $dom->getElementsByTagName('div');

        foreach ($eventContainers as $container) {
            // Check if the container has the class 'single-event'
            if ($container->getAttribute('class') === 'bg-grey-100/75 hover:bg-grey-200/75 shadow-md hover:shadow-lg p-4 pt-16 rounded-lg text-center relative pb-10 mb-4 single-event group overflow-hidden') {
                // Extract the title
                $title = $container->getElementsByTagName('h3')->item(0)->textContent;

                // Extract the date
                $date = $container->getElementsByTagName('div')->item(1)->textContent;
                // dd($container->getElementsByTagName('div')->item(1)->textContent);
                // Extract the description
                $description = $container->getElementsByTagName('p')->item(0)->textContent;

                // Extract the link
                $link = $container->getElementsByTagName('a')->item(0)->getAttribute('href');

                $image = $container->getElementsByTagName('img')->item(0)->getAttribute('src');

                // Add the event to the array
                $events[] = [
                    'title' => trim($title),
                    'date' => trim($date),
                    'description' => trim($description),
                    'link' => trim($link),
                    'image' => trim($image),
                ];
            }
        }

        // Return the events as a JSON response
        return response()->json($events);
    }
}
