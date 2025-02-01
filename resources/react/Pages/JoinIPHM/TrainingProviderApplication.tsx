import React, { useState } from 'react';

const TrainingProviderApplication = () => {
  const [formData, setFormData] = useState<any>({
    firstName: '',
    lastName: '',
    businessName: '',
    address: '',
    postalCode: '',
    country: '',
    phoneNumber: '',
    email: '',
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
    courseTitles: '',
    courseProvision:[''],
    courseProvisionOther: '',
    requestCaseStudies: '',
    caseStudiesWhy: '',
    howMark: '',
    qualifications: '',
    studentReferral: false,
    hearAbout: '',
    hearAboutDetails: '',
    referredBy: '',
    photo: null,
    comments: '',
    keywords: '',
    sanctions: '',
    acceptTerms: false,
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData:any) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
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
            <legend>Your Details</legend>
            <div className="Inputfields">
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
              <div className="Inputfield Inputfield_business_name InputfieldText InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="businessName">Name of Training Provider</label>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={formData.businessName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Inputfield Inputfield_address InputfieldTextarea InputfieldStateRequired InputfieldColumnWidth">
                <label htmlFor="address">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Inputfield Inputfield_postal_code InputfieldText InputfieldStateRequired InputfieldColumnWidth">
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
              <div className="Inputfield Inputfield_country InputfieldPage InputfieldStateRequired InputfieldColumnWidth">
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
                  <option value="USA">United States</option>
                  <option value="UK">United Kingdom</ option>
                  <option value="Canada">Canada</option>
                  {/* Continue adding other countries as needed */}
                </select>
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
              </div>
            </div>
          </fieldset>
          <fieldset className="Inputfield Inputfield_dashboard_access InputfieldFieldset InputfieldColumnWidthFirst">
            <legend>Access to your Member Dashboard</legend>
            <div className="Inputfields">
              <div className="Inputfield Inputfield_username_type InputfieldRadios InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="usernameType">Accessing Your Member Dashboard</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="usernameType"
                      value="contact_email"
                      checked={formData.usernameType === 'contact_email'}
                      onChange={handleChange}
                    />
                    I will use my primary contact email address specified above
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="usernameType"
                      value="login_email"
                      checked={formData.usernameType === 'login_email'}
                      onChange={handleChange}
                    />
                    I wish to specify a different email address
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="usernameType"
                      value="username"
                      checked={formData.usernameType === 'username'}
                      onChange={handleChange}
                    />
                    I wish to specify a username that is not an email address
                  </label>
                </div>
              </div>
              {formData.usernameType === 'login_email' && (
                <div className="Inputfield Inputfield_login_email InputfieldEmail InputfieldColumnWidthFirst">
                  <label htmlFor="loginEmail">Email Address for Member Dashboard</label>
                  <input
                    id="loginEmail"
                    name="loginEmail"
                    type="email"
                    value={formData.loginEmail}
                    onChange={handleChange}
                  />
                </div>
              )}
              {formData.usernameType === 'username' && (
                <div className="Inputfield Inputfield_login_username InputfieldText InputfieldColumnWidthFirst">
                  <label htmlFor="loginUsername">Username for Member Dashboard</label>
                  <input
                    id="loginUsername"
                    name="loginUsername"
                    type="text"
                    value={formData.loginUsername}
                    onChange={handleChange}
                    pattern="^[a-zA-Z0-9.$_~\-]*$"
                    minLength={6}
                  />
                </div>
              )}
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
              </div>
              <div className="Inputfield Inputfield_social_media InputfieldMarkup InputfieldColumnWidthFirst">
                <label>Social Media</label>
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
              <div className="Inputfield Inputfield_insured InputfieldRadios InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="insured">Are You Insured?</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="insured"
                      value="Yes"
                      checked={formData.insured === 'Yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="insured"
                      value="No"
                      checked={formData.insured === 'No'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="insured"
                      value="Applied"
                      checked={formData.insured === 'Applied'}
                      onChange={handleChange}
                    />
                    Applied
                  </label>
                </div>
              </div>
              <div className="Inputfield Inputfield_course_titles InputfieldTextarea InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseTitles">Course Titles and Qualifications being Offered</label>
                <textarea
                  id="courseTitles"
                  name="courseTitles"
                  value={formData.courseTitles}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="Inputfield Inputfield_course_provision InputfieldCheckboxes InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="courseProvision">How are your courses provided to your students?</label>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="courseProvision"
                      value="Workshops with personal & practical training"
                      checked={formData.courseProvision.includes("Workshops with personal & practical training")}
                      onChange={handleChange}
                    />
                    Workshops with personal & practical training
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseProvision"
                      value="Online/distance learning - some practical offered"
                      checked={formData.courseProvision.includes("Online/distance learning - some practical offered")}
                      onChange={handleChange}
                    />
                    Online/distance learning - some practical offered
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseProvision"
                      value="Online/distance learning only"
                      checked={formData.courseProvision.includes("Online/distance learning only")}
                      onChange={handleChange}
                    />
                    Online/distance learning only
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="courseProvision"
                      value="Other"
                      // checked={formData.courseProvision.includes("Other")}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
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
              <div className="Inputfield Inputfield_request_case_studies InputfieldRadios InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="requestCaseStudies">Do you request case studies from your students?</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="requestCaseStudies"
                      value="Yes"
                      checked={formData.requestCaseStudies === 'Yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </ label>
                  <label>
                    <input
                      type="radio"
                      name="requestCaseStudies"
                      value="No"
                      checked={formData.requestCaseStudies === 'No'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>
              {formData.requestCaseStudies === 'No' && (
                <div className="Inputfield Inputfield_case_studies_why InputfieldText InputfieldStateRequired InputfieldColumnWidthFirst">
                  <label htmlFor="caseStudiesWhy">If not, please state why:</label>
                  <input
                    id="caseStudiesWhy"
                    name="caseStudiesWhy"
                    type="text"
                    value={formData.caseStudiesWhy}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="Inputfield Inputfield_how_mark InputfieldText InputfieldColumnWidthFirst">
                <label htmlFor="howMark">How you intend to mark your students' progress while studying with you.</label>
                <input
                  id="howMark"
                  name="howMark"
                  type="text"
                  value={formData.howMark}
                  onChange={handleChange}
                />
              </div>
              <div className="Inputfield Inputfield_qualifications InputfieldTextarea InputfieldColumnWidthFirst">
                <label htmlFor="qualifications">Qualifications Held</label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  value={formData.qualifications}
                  onChange={handleChange}
                />
              </div>
              <div className="Inputfield Inputfield_student_referral InputfieldCheckbox InputfieldColumnWidthFirst">
                <label htmlFor="studentReferral">Would you like to be included in the Student Referral Programme?</label>
                <div>
                  <input
                    type="checkbox"
                    id="studentReferral"
                    name="studentReferral"
                    checked={formData.studentReferral}
                    onChange={handleChange}
                  />
                  Yes, please include me in the student referral programme.
                </div>
              </div>
              <div className="Inputfield Inputfield_hearabout InputfieldRadios InputfieldColumnWidthFirst">
                <label htmlFor="hearAbout">How did you hear about IPHM?</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="hearAbout"
                      value="Google"
                      checked={formData.hearAbout === 'Google'}
                      onChange={handleChange}
                    />
                    Google
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hearAbout"
                      value="Social Media"
                      checked={formData.hearAbout === 'Social Media'}
                      onChange={handleChange}
                    />
                    Social Media
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hearAbout"
                      value="Referred by an existing IPHM member"
                      checked={formData.hearAbout === 'Referred by an existing IPHM member'}
                      onChange={handleChange}
                    />
                    Referred by an existing IPHM member
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hearAbout"
                      value="We contacted you"
                      checked={formData.hearAbout === 'We contacted you'}
                      onChange={handleChange}
                    />
                    We contacted you
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hearAbout"
                      value="Other"
                      checked={formData.hearAbout === 'Other'}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
              </div>
              {formData.hearAbout === 'Other' && (
                <div className="Inputfield Inputfield_hearaboutdetails InputfieldText InputfieldColumnWidthFirst">
                  <label htmlFor="hearAboutDetails">Other: Please give details</label>
                  <input
                    id="hearAboutDetails"
                    name="hearAboutDetails"
                    type="text"
                    value={formData.hearAboutDetails}
                    onChange={handleChange}
                  />
                </div>
              )}
              {formData.hearAbout === 'Referred by an existing IPHM member' && (
                <div className="Inputfield Inputfield_referred_by InputfieldText InputfieldColumnWidthFirst">
                  <label htmlFor="referredBy">Details of Referring Member</label>
                  <input
                    id="referredBy"
                    name="referredBy"
                    type="text"
                    value={formData.referredBy}
                    onChange={handleChange}
                  />
                </div>
              )}
              <div className="Inputfield Inputfield_photo InputfieldFormBuilderFile InputfieldColumnWidthFirst">
                <label htmlFor="photo">Photo </label>
                <div className="InputfieldContent">
                  <p className="description">If you would like your logo or photo on your IPHM website listing, please upload here (Max. file size 5Mb - JPEG/PNG format)</p>
                  <input
                    id="photo"
                    name="photo"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => setFormData({ ...formData, photo: e.target.files![0] })}
                  />
                </div>
              </div>
              <div className="Inputfield Inputfield_comments InputfieldTextarea InputfieldColumnWidthFirst">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                />
              </div>
              <div className="Inputfield Inputfield_keywords InputfieldText InputfieldColumnWidthFirst">
                <label htmlFor="keywords">Keywords</label>
                <input
                  id="keywords"
                  name="keywords"
                  type="text"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="Enter up to 10 keywords, separated by a comma"
                />
              </div>
              <div className="Inputfield Inputfield_sanctions InputfieldRadios InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="sanctions">Sanctions</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="sanctions"
                      value="Yes"
                      checked={formData.sanctions === 'Yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="sanctions"
                      value="No"
                      checked={formData.sanctions === 'No'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="Inputfield Inputfield_accept_terms InputfieldCheckbox InputfieldStateRequired InputfieldColumnWidthFirst">
                <label htmlFor="acceptTerms">Accept Terms</label>
                <div>
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    required
                  />
                  Accept Terms
                </div>
              </div>
            </div>
          </fieldset>
          <div className="Inputfield Inputfield_trainingproviderapplication_submit InputfieldSubmit InputfieldColumnWidthFirst">
            <div className="InputfieldContent">
              <button type="submit" name="trainingproviderapplication_submit" value="Submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainingProviderApplication;