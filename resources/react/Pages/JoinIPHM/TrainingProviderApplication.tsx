import React, { useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from "@stripe/react-stripe-js";
import { AllCountry, BaseApi, useMainContext } from '@/Context/MainContext';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { WithContext as ReactTags, SEPARATORS } from 'react-tag-input';
import { isAxiosError } from 'axios';
import CustomModal from '@/Components/CustomModal';

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const TrainingProviderApplication = () => {
  const stripe = useStripe();

  const MainContext = useMainContext();
  const { isBeauty } = useParams();
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    dob: '',
    businessName: '',
    address: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
    gender: '',
    emailConfirm: '',
    usernameType: 'contact_email',
    loginEmail: '',
    loginUsername: '',
    website: '',
    facebookPage: '',
    twitter: '',
    linkedin: '',
    instagram: '',
    pinterest: '',
    youtube: '',
    tiktok: '',
    telegram: '',
    insured: '',
    selectRole: '',
    courseTitles: '',
    courseProvision: [''],
    courseProvisionOther: '',
    requestCaseStudies: '',
    caseStudiesWhy: '',
    howMark: '',
    payment: '',
    qualifications: '',
    courseNname: '',
    // hearAbout: '',
    // hearAboutDetails: '',
    // referredBy: '',
    photo: null,
    comments: '',
    keywords: '',
    sanctions: '',
    acceptTerms: false,
    tags: [],
  });

  const [discount, setDiscount] = useState("0");


  const validateForm = (formData: any) => {
    const errors: any = {};

    // Helper function for email validation
    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    // Helper function for phone number validation (basic)
    const isValidPhone = (phone: string) => /^[0-9]{10,15}$/.test(phone);

    // Required Fields Validation
    const requiredFields = [
      "firstName", "lastName", "address", "postalCode",
      "country", "phoneNumber", "email",
      "selectRole", "payment", 'dob', 'gender'
    ];

    const brequiredFields = [
      "firstName", "lastName", "address", "postalCode",
      "country", "phoneNumber", "email",
      "courseNname", "payment", 'dob', 'gender'
    ];

    if (isBeauty == "1") {
      brequiredFields.forEach(field => {
        if (!formData[field]) {
          errors[field] = `${field} is required`;
        }
      });
    } else {
      requiredFields.forEach(field => {
        if (!formData[field]) {
          errors[field] = `${field} is required`;
        }
      });
    }


    // Email validation
    if (formData.email && !isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    // if (formData.emailConfirm && formData.email !== formData.emailConfirm) {
    //   errors.emailConfirm = "Emails do not match";
    // }

    // Phone number validation
    if (formData.phoneNumber == "") {
      errors.phoneNumber = "Invalid phone number";
    }

    // Website validation (basic)
    // if (formData.website && !/^https?:\/\/\S+$/.test(formData.website)) {
    //   errors.website = "Invalid website URL";
    // }

    // Ensure at least one social media link is provided
    // const socialFields = ["facebookPage", "twitter", "linkedin", "instagram", "pinterest", "youtube", "tiktok", "telegram"];
    // if (!socialFields.some(field => formData[field])) {
    //   errors.social = "At least one social media link is required";
    // }

    // Accept Terms validation
    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms and conditions";
    }

    return errors;
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const convertToFormData = (data: any) => {
    const formData = new FormData();

    // Iterate over the keys and append to FormData
    Object.keys(data).forEach((key) => {
      const value = data[key];

      if (Array.isArray(value)) {
        // Append array values (e.g., courseProvision)
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item);
        });
      } else if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    return formData;
  };


  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (formData.courseNname == "") {
      toast.error("Plese Select Course")
      return;
    }
    if (formData.payment == "") {
      toast.error("Plese Select Subscription")
      return;
    }
    const formDataInstance = convertToFormData(formData);
    if (isModalOpen) {
      handleSubmitPayment(formDataInstance)
    } else {
      console.log("ddd");
    }
  };



  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);



  const handleSubmitPayment = async (formDataInstance: FormData) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);
    const { error, token } = await stripe.createToken(cardElement!);
    if (error) {
      toast.error(error.message);
      // setError(error.message);
      setLoading(false);
    } else {
      try {
        formDataInstance.append("stripetoken", token.id);
        const response = await BaseApi.post(`/applayForm`, formDataInstance);
        if (response.status == 201) {
          toast.success("Subscription Success!");
          window.location.reload();
        }
      } catch (error: any) {
        if (isAxiosError(error)) {
          const message = error.response?.data['error'] ?? error.message;
          toast.error(`${message}`);
        } else {
          toast.error(`${error.message}`);
        }
        console.error("Error:", error);
      }
      setLoading(false);
    }
  };



  const handleDelete = (index: number) => {
    setFormData({ ...formData, tags: formData.tags.filter((_: any, i: any) => i !== index) });
  };

  const onTagUpdate = (index: number, newTag: any) => {
    const updatedTags = [...formData.tags];
    updatedTags.splice(index, 1, newTag);
    setFormData({ ...formData, tags: updatedTags });
  };

  const handleAddition = (tag: any) => {
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      tags: [...(prevFormData.tags || []), tag] // Ensure prevFormData.tags exists
    }));
  };

  const onClearAll = () => {
    setFormData({ ...formData, tags: [] });
  };

  const [price, setPrice] = useState<any>(null);

  const setPriceData = (d: any, to: any) => {
    let pr = parseFloat(d);

    const discountedPrice = pr - (pr * parseInt(discount));
    if (formData?.payment == "Monthly") {
      setPrice(to);
    } else {
      setPrice(pr);
    }
  };
  return (
    <div className="container">
      <div className="FormBuilder FormBuilder-trainingproviderapplication FormBuilder-3">
        <form
          id="FormBuilder_trainingproviderapplication"
          className="FormBuilderFrameworkBasic FormBuilder InputfieldNoFocus InputfieldFormWidths InputfieldForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <fieldset className="Inputfield Inputfield_your_details InputfieldFieldset InputfieldColumnWidthFirst">
            <legend>Join UHPC</legend>
            <div className="Inputfields">
              <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseTitles">Select Subscription</label>
                <select onChange={(e) => {
                  if (e.target.value != "") {
                    setFormData({ ...formData, payment: e.target.value })
                  }
                }} name="" id="">
                  <option value={''}>--Select Subscription--</option>
                  {
                    ['Monthly', 'Yearly']?.map((p, i) => {


                      // if (p.type === "membership") {
                      return <option key={i} value={p}>{p}</option>
                      // }

                    })
                  }
                </select>
              </div>
              <div className="Inputfield Inputfield_first_name InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="firstName">Applicant First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span>Your Legal Name as to be shown on Certificate</span>
              </div>
              <div className="Inputfield Inputfield_last_name InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* <div className="Inputfield Inputfield_business_name InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="businessName">Name of Training Provider</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div> */}
              <div className="Inputfield Inputfield_address InputfieldTextarea InputfieldStateRequired InputfieldColumnWidth">
                <label style={{ width: "100%" }} htmlFor="address">Address</label>
                <span >Please enter your full postal address.</span>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <span>Your full address is not published on the site but helps with customers finding your listing by location.</span>

              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <div style={{ width: "49%" }} className="Inputfield Inputfield_postal_code InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    id="postalCode"
                    name="postalCode"
                    type="text"
                    value={formData.postalCode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div style={{ width: "49%" }} className="Inputfield Inputfield_country InputfieldPage InputfieldStateRequired InputfieldColumnWidth">
                  <label htmlFor="country">Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a country</option>
                    {/* Add country options here */}
                    {
                      AllCountry.map((c, i) => {
                        return <option key={i} value={c.code}>{c.name}</option>
                      })
                    }
                    {/* <option value="USA">United States</option>
                  <option value="UK">United Kingdom</ option>
                  <option value="Canada">Canada</option> */}
                    {/* Continue adding other countries as needed */}
                  </select>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <div style={{ width: "49%" }} className="Inputfield Inputfield_postal_code InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                  <label htmlFor="dob">Date Of Birth</label>
                  <input
                    style={{ width: "100%", background: "rgba(245, 245, 245, 0.45)", paddingBlock: 10, paddingInline: 10 }}
                    id="dob"
                    name="dob"
                    type="date"
                    className='required 
                   InputfieldDatetimeDatepicker InputfieldDatetimeDatepicker1 hasDatepicker initDatepicker'
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                  <span>Please use format, e.g. 26/01/1963 (or click/tap the calendar icon)</span>
                </div>
                <div style={{ width: "49%" }} className="Inputfield Inputfield_country InputfieldPage InputfieldStateRequired InputfieldColumnWidth">
                  <label htmlFor="country">Gender</label>
                  <GenderSelection
                    onChange={(g: any) => setFormData({ ...formData, gender: g })}
                  />
                </div>
              </div>
              <div className="Inputfield Inputfield_phone_number InputfieldText InputfieldColumnWidth">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="(Area Code) - (Phone Number)"
                />
                <span>Please specify your full phone number including international code if possible.</span>
              </div>
              <div className="Inputfield Inputfield_email InputfieldEmail InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="email">Primary Contact Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  id="emailConfirm"
                  name="emailConfirm"
                  type="email"
                  value={formData.emailConfirm}
                  onChange={handleChange}
                  placeholder="Confirm"
                  required
                />
                <span>Please take care to enter your email address correctly, as it is also our primary means of contact with you.</span>
              </div>
            </div>
          </fieldset>


          <fieldset className="Inputfield Inputfield_membership_information InputfieldFieldset InputfieldColumnWidthFirst">
            <legend>Membership/Profile Information</legend>
            <div className="Inputfields">
              <div className="Inputfield Inputfield_website InputfieldURL InputfieldColumnWidthFirst">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  value={formData.website}
                  onChange={handleChange}
                />
                <span>If you have a web page and would like us to link to it in your profile, please give details here.</span>
              </div>
              <div className="Inputfield Inputfield_social_media InputfieldMarkup InputfieldColumnWidthFirst">
                <label>Social Media</label>
                <div>
                  <span>Please enter any social media links that you have and would like linking from your profile. This helps us promote your services.
                    NOTE: A FULL URL or LINK IS REQUIRED (typically beginning with https://)</span>
                </div>
                <div>
                  <input
                    id="facebookPage"
                    name="facebookPage"
                    type="text"
                    value={formData.facebookPage}
                    onChange={handleChange}
                    placeholder="Facebook Page"
                  />
                  <input
                    id="twitter"
                    name="twitter"
                    type="text"
                    value={formData.twitter}
                    onChange={handleChange}
                    placeholder="X (Twitter)"
                  />
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="text"
                    value={formData.linkedin}
                    onChange={handleChange}
                    placeholder=" LinkedIn"
                  />
                  <input
                    id="instagram"
                    name="instagram"
                    type="text"
                    value={formData.instagram}
                    onChange={handleChange}
                    placeholder="Instagram"
                  />
                  <input
                    id="pinterest"
                    name="pinterest"
                    type="text"
                    value={formData.pinterest}
                    onChange={handleChange}
                    placeholder="Pinterest"
                  />
                  <input
                    id="youtube"
                    name="youtube"
                    type="text"
                    value={formData.youtube}
                    onChange={handleChange}
                    placeholder="YouTube"
                  />
                  <input
                    id="tiktok"
                    name="tiktok"
                    type="text"
                    value={formData.tiktok}
                    onChange={handleChange}
                    placeholder="TikTok"
                  />
                  <input
                    id="telegram"
                    name="telegram"
                    type="text"
                    value={formData.telegram}
                    onChange={handleChange}
                    placeholder="Telegram"
                  />
                </div>
              </div>
              {isBeauty == "0" && <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseTitles">Select Role</label>
                <select onChange={(e) => {
                  if (e.target.value != "") {
                    setFormData({ ...formData, selectRole: e.target.value })
                  }
                }} name="" id="">
                  <option value={''}>--Select Role--</option>
                  {
                    ['Training Provider', 'Therapist']?.map((p, i) => {

                      // if (isBeauty == "0") {
                      // if (p.type === "membership") {
                      return <option key={i} value={p}>{p}</option>
                      // }
                      // }
                    })
                  }
                </select>
              </div>}
              {
                formData.selectRole == "Training Provider" &&
                <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                  <label htmlFor="courseTitles">Course Offered</label>
                  <ReactTags
                    tags={formData.tags}
                    // suggestions={suggestions}
                    separators={[SEPARATORS.ENTER, SEPARATORS.COMMA]}
                    handleDelete={handleDelete}
                    handleAddition={handleAddition}
                    // handleDrag={handleDrag}
                    // handleTagClick={handleTagClick}
                    onTagUpdate={onTagUpdate}
                    inputFieldPosition="bottom"
                    editable
                    // clearAll
                    // onClearAll={onClearAll}
                    maxTags={7}
                  />
                </div>

              }

              {isBeauty == "0" && <div style={{ marginBottom: 10, }} className="Inputfield Inputfield_request_case_studies InputfieldRadios InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="requestCaseStudies">Are you Practitioner?</label>
                <div style={{
                  padding: "5px",
                  background: "#f5f5f5",
                }}>
                  <label style={{
                    width: "100%",
                    marginBlock: "5px",
                    marginInline: "5px",

                  }}>
                    <input
                      type="radio"
                      name="requestCaseStudies"
                      value="Yes"
                      style={{ marginInline: 4 }}
                      checked={formData.requestCaseStudies === 'Yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </ label>
                  <label style={{
                    width: "100%",
                    marginBlock: "3px",
                    marginInline: "5px",

                  }}>
                    <input
                      type="radio"
                      name="requestCaseStudies"
                      value="No"
                      style={{ marginInline: 4 }}
                      checked={formData.requestCaseStudies === 'No'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>}
              <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseTitles">{formData.requestCaseStudies === 'No' ? "What qualifications held?" : "What qualifications offered?"}</label>
                {
                  formData.requestCaseStudies != 'No' && (
                    <div>
                      <p>Please list any therapies you are currently offering and are qualified in. - Maximum 5.
                        ONLY ADD THERAPIES THAT YOU ARE CURRENTLY OFFERING - You can always request more to be added in the future.</p>
                      <p>(Please note we may request a copy of your qualifications).</p>
                    </div>
                  )
                }
                <textarea
                  id="courseTitles"
                  name="courseTitles"
                  value={formData.courseTitles}
                  onChange={handleChange}
                  required
                />

              </div>

              <div
                className="inputfield inputfield-sanctions inputfield-radios inputfield-state-required inputfield-column-width inputfield-column-width-first"
                style={{ width: "100%", opacity: 1, marginBlock: 10 }}
                id="wrap_Inputfield_sanctions"
                data-original-width="50"
              >
                <label
                  className="inputfield-header inputfield-state-toggle"
                  htmlFor="Inputfield_sanctions"
                >
                  Are you insured
                </label>
                <div className="inputfield-content">

                  <ul style={{
                    display: "flex",
                    paddingTop: '10px',
                    /* padding-block: 10px; */
                    background: "whitesmoke",
                    alignItems: 'center',
                    paddingInline: '10px',
                    paddingBottom: "6px",

                  }} className="inputfield-radios-floated pw-clearfix">
                    {["Yes", "No"].map((option) => (
                      <li key={option} style={{ marginInline: 5 }}>
                        <label>
                          <input
                            type="radio"
                            name="insured"
                            style={{ marginTop: 4 }}
                            value={option}
                            // checked={sanctionStatus === option}
                            onChange={handleChange}
                            className="required"
                          />
                          <span className="pw-no-select">{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseTitles">Select Course</label>
                <select onChange={(e) => {
                  // console.log(e.currentTarget.selectedOptions.item(0)?.dataset['price'])
                  if (e.target.value != "") {
                    setPriceData(e.currentTarget.selectedOptions.item(0)?.dataset['price'], e.currentTarget.selectedOptions.item(0)?.dataset['to']);
                    setFormData({ ...formData, courseNname: e.target.value });
                    setDiscount(e.currentTarget.selectedOptions.item(0)?.dataset['discount']!);

                  }
                }} name="" id="">
                  <option value={''}>--Select Course--</option>
                  {
                    MainContext?.allHolistic?.map((p, i) => {
                      if (isBeauty == "0") {
                        if (p.type === "membership") {
                          return <option data-to={p?.deposit_from} data-discount={p?.discount} key={i} data-price={p?.price} value={p?.name}>{p?.name}</option>
                        }
                      } else if (isBeauty == "1") {
                        if (p.type === "beauty") {
                          return <option data-to={p?.deposit_from} data-discount={p?.discount} key={i} data-price={p?.price} value={p?.name}>{p?.name}</option>
                        }
                      }
                    })
                  }
                </select>

              </div>

              {formData.courseProvision.includes("Other") && (
                <div className="Inputfield Inputfield_course_provision_other InputfieldText InputfieldColumnWidthFirst">
                  <label htmlFor="courseProvisionOther">Other: Please give details</label>
                  <input
                    id="courseProvisionOther"
                    name="courseProvisionOther"
                    type="text"
                    value={formData.courseProvisionOther}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* {formData.requestCaseStudies === 'Yes' && (
                <div className="Inputfield Inputfield_case_studies_why InputfieldText InputfieldStateRequired InputfieldColumnWidthFirst">
                  <label htmlFor="caseStudiesWhy">Case Studies</label>
                  <input
                    id="caseStudiesWhy"
                    name="caseStudiesWhy"
                    type="text"
                    value={formData.caseStudiesWhy}
                    onChange={handleChange}
                  />
                </div>
              )} */}
              {/* <div className="Inputfield Inputfield_how_mark InputfieldText InputfieldColumnWidthFirst">
                <label htmlFor="howMark">How you intend?</label>
                <input
                  id="howMark"
                  name="howMark"
                  type="text"
                  value={formData.howMark}
                  onChange={handleChange}
                />
              </div> */}
              <div className="Inputfield Inputfield_qualifications InputfieldTextarea InputfieldColumnWidthFirst">
                <label htmlFor="qualifications">Qualifications Held</label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                />
              </div>


              <div className="Inputfield Inputfield_photo InputfieldFormBuilderFile InputfieldColumnWidthFirst">
                <label htmlFor="photo">Photo </label>

                <div className="InputfieldContent" style={{
                  padding: "5px",
                  background: "#f5f5f5",
                }}>
                  <span><strong>"A Picture is Worth A Thousand Words"</strong></span>
                  <p>When it comes to successfully marketing and promoting your business, a photo of you will help to boost your profile and trust for your clients.</p>
                  {/* <p className="description">If you would like your logo or photo on your IPHM website listing, please upload here (Max. file size 5Mb - JPEG/PNG format)</p> */}
                  <input

                    id="photo"
                    name="photo"
                    type="file"
                    style={{ width: '100%', marginBlock: 6 }}
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFormData({ ...formData, photo: e.target.files![0] })}
                  />
                  <span>Max. file size 5Mb - JPEG/PNG format</span>
                </div>
              </div>
              <div style={{ marginTop: 10 }} className="Inputfield Inputfield_comments InputfieldTextarea InputfieldColumnWidthFirst">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
                <span>Please add any additional comments you feel may be relevant.</span>
              </div>
              <div className="Inputfield Inputfield_keywords InputfieldText InputfieldColumnWidthFirst">
                <label htmlFor="keywords" style={{ width: '100%' }}>Keywords</label>
                <span>Please enter up to 5 keywords, separated by a comma. This helps customers find your listing.</span>
                <input
                  id="keywords"
                  name="keywords"
                  type="text"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="Enter up to 10 keywords, separated by a comma"
                />
              </div>
              <div
                className="inputfield inputfield-sanctions inputfield-radios inputfield-state-required inputfield-column-width inputfield-column-width-first"
                style={{ width: "100%", opacity: 1 }}
                id="wrap_Inputfield_sanctions"
                data-original-width="50"
              >
                <label
                  className="inputfield-header inputfield-state-toggle"
                  htmlFor="Inputfield_sanctions"
                >
                  Sanctions
                </label>
                <div className="inputfield-content">
                  <span className="description">
                    Have you had any sanctions passed against you by another regulation awarding body or accreditation board?
                  </span>
                  <ul style={{
                    display: "flex",
                    paddingTop: '10px',
                    /* padding-block: 10px; */
                    background: "whitesmoke",
                    alignItems: 'center',
                    paddingInline: '10px',
                    paddingBottom: "6px",

                  }} className="inputfield-radios-floated pw-clearfix">
                    {["Yes", "No"].map((option) => (
                      <li key={option} style={{ marginInline: 5 }}>
                        <label>
                          <input
                            type="radio"
                            name="sanctions"
                            style={{ marginTop: 4 }}
                            value={option}
                            // checked={sanctionStatus === option}
                            onChange={handleChange}
                            className="required"
                          />
                          <span className="pw-no-select">{option}</span>
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: 10, marginBottom: 10 }} className="Inputfield Inputfield_accept_terms InputfieldCheckbox InputfieldStateRequired InputfieldColumnWidthFirst">
                <label style={{ width: "100%" }} htmlFor="acceptTerms">Accept Terms & Condition</label>
                <span>Please confirm you have read, agreed and understood the UHPC  <Link to={"#"} onClick={() => {
                  if (confirm("Are you sure you want to discard the form changes?")) {
                    window.location.href = "/termsCondition";
                  } else {

                  }
                }} style={{ textDecoration: "underline" }}>Accept Terms & Condition</Link></span>
                <div style={{
                  padding: "5px",
                  background: "#f5f5f5",
                }}>
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    style={{ marginInline: 10, marginTop: 5 }}
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  <Link to={"#"} >Accept Terms & Condition</Link>
                </div>
              </div>
            </div>
          </fieldset>
          {/* <fieldset className="Inputfield Inputfield_membership_information InputfieldFieldset InputfieldColumnWidthFirst">
            <legend>Payment Info</legend>

            <div style={{ paddingBlock: 20 }}>
              <CardElement
              
              onChange={(d) => {
                console.log(d);
                 
              }} options={{ hidePostalCode: true }} />
            </div>
          </fieldset> */}
          <div className="Inputfield Inputfield_trainingproviderapplication_submit InputfieldSubmit InputfieldColumnWidthFirst">
            <div className="InputfieldContent">
              <button type='button' onClick={() => {
                const errors = validateForm(formData);
                console.log(errors, Object.values(errors).length);
                if (Object.values(errors).length > 0) {
                  // if(errors.email!=n){
                  //   alert("Please Enter Valid Email");
                  // }else{
                  // alert("Please All Required Fields");
                  // }
                  Object.values(errors).forEach((err: any) => {
                    toast.error(err); // Show each error as a toast
                  });
                } else {
                  setModalOpen(true);
                }

              }} >Submit</button>
            </div>
          </div>

          <CustomModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Confirmation">
            <div style={{ width: "30rem" }}>
              <div className="Inputfield Inputfield_case_studies_why InputfieldText InputfieldStateRequired InputfieldColumnWidthFirst">
                <input
                  id="cardholdername"
                  placeholder='Card Holder Name'
                  name="cardholdername"
                  type="text"
                  value={formData.caseStudiesWhy}
                  onChange={handleChange}
                />
              </div>
              <CardNumberElement />
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBlock: 10 }} >
                <div style={{ width: '48%' }}>
                  <CardExpiryElement />
                </div>
                <div style={{ width: '48%' }}>
                  <CardCvcElement />
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Subscription Type:</p>
                <p>{formData.payment}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Course Name:</p>
                <p>{formData?.courseNname}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Sub Total:</p>
                <p>{price}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Discount:</p>
                <p>{discount}%</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Tax:</p>
                <p>0%</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: "space-between" }}>
                <p>Total:</p>
                <p>{price - ((price * parseInt(discount)) / 100)}</p>
              </div>
            </div>
            {/* <p>{formData?.payment == "Monthly" ? `Are you sure you want to proceed with the monthly ${price} subscription` : `Are you sure you want to proceed with the yearly ${price} subscription?`}</p> */}
          </CustomModal>
        </form>
      </div>

    </div>
  );
};




const GenderSelection = ({ onChange }: { onChange: any }) => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (event: any) => {
    setSelectedGender(event.target.value);
    if (onChange) onChange(event.target.value); // Pass selected value to parent if needed
  };

  return (
    <div className="inputfield-content">
      <ul className="InputfieldRadiosFloated pw-clearfix">
        {["Male", "Female"].map((gender) => (
          <li key={gender}>
            <label>
              <input
                type="radio"
                name="male_female"
                value={gender}
                checked={selectedGender === gender}
                onChange={handleChange}
                className="required"
              />
              <span className="pw-no-select">{gender}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="maxColHeightSpacer" style={{ height: "11px" }}></div>
    </div>
  );
};


export default TrainingProviderApplication;