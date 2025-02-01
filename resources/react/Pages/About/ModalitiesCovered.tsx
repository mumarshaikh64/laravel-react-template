import React from 'react'
import BgBanner from '../../assets/images/header-gradient-bg.png'
import AboutBanner from '../../assets/images/about2.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const ModalitiesCovered = () => {
    return (
        <div className='main-box mt-[5.6rem]  '>
            <div className={`hero-section flex items-center`} style={{ backgroundImage: `url(${BgBanner})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center',backgroundSize:"100% 100%" }}>
                <div className="px-[4rem] py-[5.5rem]">
                    <h3 className="text-[#1f3831] text-2xl font-bold">Modalities Recognised</h3>
                </div>
            </div>
            <div className='page-content'>
                <nav className="bg-white px-20 py-3 rounded-md shadow-sm">
                    <ol className="list-reset flex text-sm text-gray-700">
                        <li>
                            <a href="#" className="text-[#4091ca] hover:text-[#4091ca] font-[600]">Home</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li>
                            <a href="#" className="text-[#4091ca] font-[600] hover:text-[#4091ca]">About</a>
                            <span className="mx-0">{" >> "}</span>
                        </li>
                        <li className="text-gray-500">Modalities Covered</li>
                    </ol>
                </nav>
                <div className='flex'>
                    <div className='w-[75%] px-[4.8rem] py-4'>
                        <h2 className='font-[700] text-[1.4rem]'>The following modalities are eligible & will be accepted by UHPC</h2>
                        <p className='text-[#1f3831] py-3'>
                            If your particular therapy/modality is not listed here then please contact us as many modalities may fall under a different heading. We are always open to new therapies being listed. Please scroll down the list to check if your particular course or therapy is covered.
                        </p>
                        <p className='text-[#1f3831] py-3'>
                            The UHPC now recognises over 1000's of complementary therapies/modalities. The UHPC also welcomes training providers who offer correspondence and distance learning courses as well as class taught or workshop training.
                        </p>
                        <p><span className='font-[700] text-[#1f3831]'>For Beauty Modalities</span> - <span>Please Use</span><span className='text-[#4091ca] font-[700]'> UHPC Beauty</span></p>
                        <button className='my-10 border py-2 px-4 font-[600] border-2 border-[#1f3831]'>Get an Insurance Quote</button>

                        <ul className='aboutList'>
                            <li>Abe Healing</li>
                            <li>Access Consciousness</li>
                            <li>Access Consciousness Bars</li>
                            <li>Accreditation Agency</li>
                            <li>Acting Tutor</li>
                            <li>Acupressure</li>
                            <li>Adjudicator</li>
                            <li>Advanced Sound-Wave Energy</li>
                            <li>Alexander Technique</li>
                            <li>Aesthetics&nbsp;</li>
                            <li>Alcohol Sobriety&nbsp;Coaching</li>
                            <li>Allergy Testing</li>
                            <li>Allergy Therapy</li>
                            <li>Angel Card Reading</li>
                            <li>Angel Therapy</li>
                            <li>Angel Work</li>
                            <li>Anya&nbsp;Healing</li>
                            <li>Antenatal classes</li>
                            <li>Animal Therapy</li>
                            <li>Appreciative Inquiry</li>
                            <li>Aqua Detox therapy</li>
                            <li>Arbitrator</li>
                            <li>Aromatherapy</li>
                            <li>Art in health</li>
                            <li>
                                Art Therapy (title not eligible for UK therapists only) use Art facilator
                                instead
                            </li>
                            <li>Art Tutor</li>
                            <li>Assertiveness training for work</li>
                            <li>Astro-Therapy</li>
                            <li>Astrology</li>
                            <li>Auditory Integration Training</li>
                            <li>Aura Imaging Photography</li>
                            <li>AURA-SOMA</li>
                            <li>Auriculo Therapy</li>
                            <li>Aurora Therapies</li>
                            <li>Ayurvedic Massage</li>
                            <li>Ayurvedic Yoga Massage</li>
                            <li>Baby Massage</li>
                            <li>Baby Reflex</li>
                            <li>Baby Sign language</li>
                            <li>Baby Yoga</li>
                            <li>Bare Foot Therapies</li>
                            <li>Back Massage</li>
                            <li>Bach Flower remedies</li>
                            <li>Bates method of vision improvement</li>
                            <li>Beauty Facial</li>
                            <li>Behaviour Therapy</li>
                            <li>Belvaspata healing</li>
                            <li>Bio Detox Therapy</li>
                            <li>Bio-Magnetic Therapy</li>
                            <li>Biofeedback</li>
                            <li>Bioptron Light Therapy</li>
                            <li>Biorhythms</li>
                            <li>Bio Stress Release</li>
                            <li>Bnwyfre</li>
                            <li>Board Certified Assistant Behaviour Analyst (BCaBA)</li>
                            <li>Board Certified Behaviour Analyst (BCBA, BCBA-D)</li>
                            <li>Body Conditioning / Swiss Ball</li>
                            <li>Body Slimming /spa treatments</li>
                            <li>Body Talk</li>
                            <li>Body Oriented Coaching and Mentoring&nbsp;</li>
                            <li>Bowen Technique</li>
                            <li>Breastfeeding Counsellor</li>
                            <li>Breathwork</li>
                            <li>Business and Management Auditing</li>
                            <li>Business Coach</li>
                            <li>Business Consultant</li>
                            <li>Business Development Consultant</li>
                            <li>Buteyko Breathing</li>
                            <li>Cacao Ceremony</li>
                            <li>Career Coaching</li>
                            <li>CellRelease®</li>
                            <li>Celebrants</li>
                            <li>Channelling</li>
                            <li>Chartered Occupational Psychologist</li>
                            <li>Chartered Occupational Psychologist</li>
                            <li>Chavutti Thirumal</li>
                            <li>Chi Kung</li>
                            <li>Chrysalis Effect Certified Practitioner</li>
                            <li>Clinical Hypnosis</li>
                            <li>Coach Supervisor</li>
                            <li>Coach Trainer or Tutor</li>
                            <li>Coaching - Life and Executive Coaching</li>
                            <li>Cold Water Therapy</li>
                            <li>Cognitive Behavioural Therapy</li>
                            <li>Colour Breathing</li>
                            <li>Colour Reflexology</li>
                            <li>Colour Therapy</li>
                            <li>Colourworks</li>
                            <li>Community Development Worker</li>
                            <li>Conciliation/Mediation</li>
                            <li>Construction Adjudicator</li>
                            <li>Cooking Demo</li>
                            <li>Copy-editing or proofreading</li>
                            <li>Counselling</li>
                            <li>Courtroom Coaching</li>
                            <li>Cranio-sacral therapy</li>
                            <li>Creative Journaling</li>
                            <li>Cross cultural or intercultural training</li>
                            <li>Cryotherapy (Cryopen)</li>
                            <li>Crystal Healing</li>
                            <li>Crystal Readings</li>
                            <li>Culinary Medicine Coaching</li>
                            <li>Culture change training</li>
                            <li>Conscious Coding</li>
                            <li>Cupping</li>
                            <li>Dance Movement Therapy</li>
                            <li>asdfasdf</li>
                            <li>Dance teacher</li>
                            <li>Dance Therapy</li>
                            <li>Daoyin Tao</li>
                            <li>De-cluttering Practitioner</li>
                            <li>De-cluttering Practitioner (APDO-UK Member)</li>
                            <li>Deeksha Healing/Oneness Blessing</li>
                            <li>Deep Tissue Massage</li>
                            <li>Dementia Care Training</li>
                            <li>Dermaplaning</li>
                            <li>Depression at work awareness training</li>
                            <li>Diversity &amp; Dignity at Work Awareness Training</li>
                            <li>Divorce Consultant</li>
                            <li>Dog behaviourist / Trainer</li>
                            <li>Doula - Birth and Postnatal</li>
                            <li>Dowsing</li>
                            <li>Drama Therapy</li>
                            <li>Drama/movement workshops</li>
                            <li>Dream Therapy</li>
                            <li>Dragon Reiki</li>
                            <li>Ear Seeding</li>
                            <li>Educational Coaching and Tuition</li>
                            <li>Educational Consultant</li>
                            <li>Electrolysis</li>
                            <li>Emmett Technique</li>
                            <li>Emo Trance</li>
                            <li>Emotional Freedom Technique</li>
                            <li>Emotional Freedom Therapy</li>
                            <li>Empulse electromagnetic therapy</li>
                            <li>Encounter Groups</li>
                            <li>Energy Cone Technique (ECT)</li>
                            <li>Energy Healing</li>
                            <li>Executive Associate (accredited by the IIB)</li>
                            <li>External Quality Assurance</li>
                            <li>Eye Movement Desensitisation and Reprocessing (EMDR)</li>
                            <li>Eyebrow Perfection</li>
                            <li>Eyelash and Eyebrow Treatments &amp; Extensions</li>
                            <li>Eyebrows</li>
                            <li>Equine Assisted Therapy</li>
                            <li>Face Painting</li>
                            <li>Face Reading</li>
                            <li>Facilitator</li>
                            <li>Faith Healing</li>
                            <li>Far-Infrared Detoxification</li>
                            <li>Feng Shui</li>
                            <li>First Aid at Work training</li>
                            <li>First Aid Training</li>
                            <li>Fitness Instruction</li>
                            <li>Floatation Tank Therapy</li>
                            <li>Flower Remedies</li>
                            <li>Focusing</li>
                            <li>Foot Health Practitioner</li>
                            <li>Functional Medicine</li>
                            <li>Future Life Progression</li>
                            <li>Gem Remedies</li>
                            <li>Geopathic Stress</li>
                            <li>Gestalt</li>
                            <li>Gong Therapies</li>
                            <li>Guardian ad Litem</li>
                            <li>Guided Self Healing</li>
                            <li>Happiness Cure</li>
                            <li>Havening - Amygdala Depotentiation Technique (ADT)</li>
                            <li>Healing Codes</li>
                            <li>Healing Dowsing</li>
                            <li>Health &amp; Lifestyle Trainer</li>
                            <li>Health Coaching</li>
                            <li>Health Kinesology</li>
                            <li>Hearing Coaching</li>
                            <li>Hearing Therapy</li>
                            <li>Helix Healing</li>
                            <li>Hellerwork</li>
                            <li>Herbalism</li>
                            <li>Holistic massage</li>
                            <li>Holistic Counselling</li>
                            <li>Holistic Integrated Creative Arts Therapy (HICAT)</li>
                            <li>Holistic psychotherapy</li>
                            <li>Holographic repatterning</li>
                            <li>Home Staging</li>
                            <li>Homeopathy</li>
                            <li>Hopi Ear Candling</li>
                            <li>Hot &amp; Cold Stone Massage</li>
                            <li>Human Resources Consultancy</li>
                            <li>Hyperton-X Kinesiology</li>
                            <li>Hyaluron Pen</li>
                            <li>Hyperbaric Oxygen Therapy&nbsp;</li>
                            <li>HypnoBirthing</li>
                            <li>Hypnotherapy</li>
                            <li>Hijama Cupping</li>
                            <li>I-Ching Readings</li>
                            <li>Image Consultant</li>
                            <li>Indian head massage</li>
                            <li>Integrated Energy Therapy</li>
                            <li>Integrated Energy Techniques</li>
                            <li>Integrative art therapy</li>
                            <li>Interior Design</li>
                            <li>Introduction agency</li>
                            <li>Intuitive Artwork</li>
                            <li>Iridology</li>
                            <li>IT instruction and confidence building</li>
                            <li>Kalari Foot Massage</li>
                            <li>Kinesiology</li>
                            <li>Ku Nye (Tibetan) Head Massage</li>
                            <li>Kundalini Yoga</li>
                            <li>LaStone Therapy</li>
                            <li>Laughter therapy</li>
                            <li>Lava Shells Massage</li>
                            <li>Leadership training</li>
                            <li>Life Coaching &amp; NLP&nbsp;</li>
                            <li>Life Between Lives Therapy</li>
                            <li>Light therapy</li>
                            <li>Lymph Drainage Massage</li>
                            <li>M technique</li>
                            <li>Magnetic Crystal Sound Healing</li>
                            <li>Management - setting up &amp; running a small business</li>
                            <li>Management Consultancy</li>
                            <li>Management Consultant to the Social Care Industry</li>
                            <li>Management Training - appraisal skills</li>
                            <li>Management Training - disciplinary skills</li>
                            <li>Management Training - interview skills</li>
                            <li>Management Training - performance skills</li>
                            <li>Management Training - personal effectiveness</li>
                            <li>Management Training - presentation skills</li>
                            <li>Management Training - sales</li>
                            <li>Management Training - self management</li>
                            <li>Management Training - team leadership skills</li>
                            <li>Management Training - team working</li>
                            <li>Management Training - time management</li>
                            <li>Management Training and advice on communication skills</li>
                            <li>Manicure &amp; Pedicure</li>
                            <li>Manipulative Therapy</li>
                            <li>Manual Lymphatic Drainage</li>
                            <li>Market Research Consultant</li>
                            <li>Marketing Consultant</li>
                            <li>Mary Network Healing</li>
                            <li>Massage</li>
                            <li>Matrix Reimprinting</li>
                            <li>Matrix Energetics&nbsp;</li>
                            <li>Mediation, arbitration or adjudication chambers</li>
                            <li>Mediation/Conciliation</li>
                            <li>Meditation guidance</li>
                            <li>Mediumship</li>
                            <li>Menopause Wellness</li>
                            <li>Mentoring</li>
                            <li>Meridian Energy Therapy</li>
                            <li>Meridian Psychotherapy</li>
                            <li>Meta-Medicine</li>
                            <li>Metabolic Effect Fitness</li>
                            <li>Metamorphic Technique</li>
                            <li>Metaphysical Practitioner</li>
                            <li>Mickel Therapy</li>
                            <li>Microneedling</li>
                            <li>Mindfulness</li>
                            <li>MLM consultant</li>
                            <li>Mobiliser</li>
                            <li>Music Therapy</li>
                            <li>Myers Briggs</li>
                            <li>Myofascial release and Trigger Point Massage</li>
                            <li>Naturopathy</li>
                            <li>Networking leader</li>
                            <li>Neuro Linguistic Programming</li>
                            <li>Neuro Lingusitic Programming Training</li>
                            <li>Neutral Space Relaxation</li>
                            <li>NUMEROLOGY</li>
                            <li>Nutri-Energetics</li>
                            <li>Nutritional Therapy</li>
                            <li>OH Cards</li>
                            <li>Oracle Card reading</li>
                            <li>Ordained Minister</li>
                            <li>Organising business activities</li>
                            <li>Oriental Face Massage</li>
                            <li>Oriental Hand Massage</li>
                            <li>Osteopathy</li>
                            <li>Palmistry</li>
                            <li>Paranormal Practitioner</li>
                            <li>Parenting Classes</li>
                            <li>Past Life Regression Therapy</li>
                            <li>Pendulum Dowsing</li>
                            <li>Personal Development</li>
                            <li>Personal safety training</li>
                            <li>Pet Sitting and Dog Walker</li>
                            <li>Photography</li>
                            <li>Photography</li>
                            <li>Physical mediumship</li>
                            <li>Physical mediumship</li>
                            <li>Pilates</li>
                            <li>Play Therapy</li>
                            <li>PNF</li>
                            <li>Polarity Therapy</li>
                            <li>Pre &amp; Post Natal Exercise</li>
                            <li>Pregnancy Massage</li>
                            <li>Post Partum Massage</li>
                            <li>Primal Integration therapy</li>
                            <li>Professional Organiser - APDO member</li>
                            <li>PSYCH-K</li>
                            <li>Psychic readings</li>
                            <li>Psychic Surgery</li>
                            <li>Psychobiology</li>
                            <li>Psychology</li>
                            <li>Psychometric assessment</li>
                            <li>Psychosynthesis</li>
                            <li>Psychotherapist</li>
                            <li>Quantum Holographic Echo Healing</li>
                            <li>Quantum-Touch</li>
                            <li>Radical Forgiveness</li>
                            <li>Radionics</li>
                            <li>Rahanni Celestial Healing</li>
                            <li>Rapid Results Consultant</li>
                            <li>Reality Therapy</li>
                            <li>Rebozo Massage</li>
                            <li>Reconnective Healing</li>
                            <li>Reference Point Therapy (RPT)</li>
                            <li>Reflective Repatterning</li>
                            <li>Reflexology</li>
                            <li>Reiki</li>
                            <li>Relationship Consultant</li>
                            <li>Relaxation therapy</li>
                            <li>Remote Viewing</li>
                            <li>Report Preparation</li>
                            <li>Researcher</li>
                            <li>Reverse Therapy</li>
                            <li>Runes</li>
                            <li>Rose Practitioner</li>
                            <li>Space Clearing</li>
                            <li>Scar Healing</li>
                            <li>Scenar therapy</li>
                            <li>School Inspector</li>
                            <li>Seated Chair massage</li>
                            <li>Secret Shopper</li>
                            <li>Secretarial/admin or PA</li>
                            <li>Sedona Method</li>
                            <li>Seichim Healing</li>
                            <li>Sensory Movement &amp; Play</li>
                            <li>Shamanic Healing</li>
                            <li>Shamanic Reiki</li>
                            <li>Shakti yoga dance</li>
                            <li>Shen Therapy</li>
                            <li>Shiatsu</li>
                            <li>Singing/Vocal Instruction</li>
                            <li>Sleep Coach</li>
                            <li>Sleep Consultant</li>
                            <li>Sobriety/Sober Coaching</li>
                            <li>Soul Plan Reading</li>
                            <li>Somatic Experiencing/Therapy</li>
                            <li>SoulTalk</li>
                            <li>SoulTalk</li>
                            <li>Sound Healing</li>
                            <li>Sophrology</li>
                            <li>Speech and language therapy</li>
                            <li>Spinal Touch</li>
                            <li>Spiritual Accompaniment</li>
                            <li>Spiritual healing</li>
                            <li>Spirit Releasement Therapy</li>
                            <li>Sober Coaching</li>
                            <li>Sport Massage</li>
                            <li>Sports Injury Therapists</li>
                            <li>Stress Counselling</li>
                            <li>Stress Management</li>
                            <li>Stress Massage</li>
                            <li>Stiper Therapy</li>
                            <li>Sugaring</li>
                            <li>Surge of Chi Exerciser</li>
                            <li>Swedish Massage</li>
                            <li>T-Journey</li>
                            <li>Tai chi</li>
                            <li>Talent Management</li>
                            <li>Tanning</li>
                            <li>Tapas Acupressure Technique</li>
                            <li>Tarot card reading</li>
                            <li>Tatty Bumpkin</li>
                            <li>Teaching acting</li>
                            <li>Team Building Exercises</li>
                            <li>Thai foot massage</li>
                            <li>Thai Hot Herb Massage</li>
                            <li>Thai Yoga Massage</li>
                            <li>The Emotion Code</li>
                            <li>The Journey</li>
                            <li>Therapeutic Supervision</li>
                            <li>Thermal Palms</li>
                            <li>Thermo-Auricular Therapy</li>
                            <li>Theta DNA Healing</li>
                            <li>Thought Field Therapy</li>
                            <li>Threading</li>
                            <li>Time Line Therapy</li>
                            <li>Tinnitus Coaching</li>
                            <li>Trager</li>
                            <li>Train the Trainer</li>
                            <li>Trauma Release Exercises (TRE)</li>
                            <li>Tui Na Chinese Massage</li>
                            <li>Tutor</li>
                            <li>UK Paranormal Practitioner</li>
                            <li>Ultrasound Cavatation</li>
                            <li>Vibrillian</li>
                            <li>Visualisation</li>
                            <li>Vitamin Therapy</li>
                            <li>Voice Dialogue</li>
                            <li>Voice tutor, training and teaching</li>
                            <li>Warm Bamboo Massage</li>
                            <li>Wax hair removal</li>
                            <li>Weight Management</li>
                            <li>Wellness Medicine</li>
                            <li>Whim Hoff&nbsp;</li>
                            <li>Whole Food Therapy</li>
                            <li>Writing Skills Training</li>
                            <li>Yoni Steaming</li>
                            <li>Yoga training and practitoners</li>
                            <li>Zero Balancing</li>
                            <li>Zdenko Domancic Bioenergy Therapy</li>
                        </ul>
                    </div>
                    <div className='w-[25%] py-4 px-4'>
                        <h3 className='font-[700] text-[20px]'>UHPC Membership Includes:</h3>
                        <div className=''></div>
                        <div className='card bg-[#fff]  mt-6 shadow-xl'>
                            <img src='https://www.uhpc.co.uk/site/assets/files/1922/therapist-holding-uhpc-badge.389x0.1532956894.jpg' />
                            <div className=' flex justify-center flex-col items-center'>
                                <ul className='aboutRightUl'>
                                    <li>Members Therapy Badge and Certificate</li>
                                    <li>Listing on our website</li>
                                    <li>Discount on Holistic Insurance</li>
                                    <li>Discount on a wide range of Holistic health products</li>
                                    <li>Promote your therapies on our workshops and events page free</li>
                                    <li>Use our accredited therapist logo on your own website or blog page</li>
                                </ul>
                                <button className='mt-4 mb-4 border py-2 px-4 font-[600] border-2 border-[#1f3831]'>Join Now</button>
                            </div>
                        </div>
                        <div className='card bg-[#fff]  mt-6 shadow-xl  mt-20'>
                            {/* <h3 className='font-[700] text-[20px]'>UHPC Membership Includes:</h3> */}
                            <div className=''>
                                <img src='https://www.uhpc.co.uk/site/assets/files/1922/therapist-holding-uhpc-badge.389x0.1532956894.jpg' />
                                <div className=''></div>
                                <h3 className='mx-4 my-3 text-[16px] text-[#4091ca] font-[600] courser-pointer '>Top Tips for Starting Your Own Holistic Therapy Business</h3>
                                <div className=' flex justify-center flex-col items-center'>
                                    <p className='px-4 text-[13px]'>
                                        Starting your own holistic therapy business can be a rewarding journey, allowing you to share your passion for wellness while helping others achieve balance in mind, body, and spirit. However, ...
                                    </p>
                                    <p className='w-full px-4 mt-2 text-[14px] font-[600] text-[#ccc]'>3 December 2024</p>
                                    <div className='flex items-center justify-end w-full px-4'>
                                    <button className='font-[600] flex items-center mt-2 mb-2 text-[#4091ca]'>Read More <FaArrowRight className='ml-1 text-[14px]' /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-[100px] stripe stripe-bottom stripe-default-bg-image dark-colored-bg" style={{
                    backgroundImage: `url(${AboutBanner})`,
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                 }}>
                    <div className="stripe-upper-bg" />
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 columns">
                                <div className="lead-text-large width-80pct-centered text-center text-white">
                                    <p className='text-[25px] font-[600] px-[100px]'>
                                        Did you know? As a signed up member you can use the UHPC Logo on
                                        your website, stationery, or blog/social media pages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalitiesCovered