import React from 'react'
import './style.css'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous route
  };

  return (
    <>
     <div className='pp-head'>
       <div className='container'>
        <div className='d-flex  justify-content-between' style={{width:"100%"}}>
        <button className=" backButton  " onClick={handleGoBack} > <span><IoIosArrowBack size={20}/></span>  back</button>
        <h4 className='pp-title'>OneApp Privacy Policy</h4>
        <span className='pp-span'></span>
        </div>
       </div>
     </div>
     <div class="pp-body">
      <p>
        <b>OneApp Privacy Policy</b><br />OneApp (hereinafter may be referred to
        as OneApp, “we”, “us” or “our”) is committed to protecting the privacy
        of personal information (i.e. any information relating to an identified
        or identifiable natural person) of those who visit the OneApp website.
        Amendments to this Privacy Policy will be posted to the Site and will be
        effective when posted. Your continued use of the Site and/or Services
        following the posting of any amendment to this Privacy Policy shall
        constitute your acceptance of such amendment.<br /><br /><b
          >Consent and Information Collection and Use </b
        ><br />When you register as a user of our Site and Services, we ask for
        personal information that will be used to activate your account, provide
        the Services to you, communicate with you about the status of your
        account, and for other purposes set out in this Privacy Policy. Your
        name, company name, address, telephone number, email address and certain
        other information about you may be required by us to provide the
        Services or be disclosed by you during your use of the Services. You
        will also be asked to create a user name and private password, which
        will become part of your account information.<br /><br />By providing
        personal information to us and by retaining us to provide you with the
        Services, you voluntarily consent to the collection, use and disclosure
        of such personal information as specified in this Privacy Policy. The
        legal bases for our processing of personal information are primarily
        that the processing is necessary for providing the Services and that the
        processing is carried out in our legitimate interests, which are further
        explained below. Without limiting the foregoing, we may on occasion ask
        you to consent when we collect, use, or disclose your personal
        information in specific circumstances. <br /><br />We take steps
        designed to ensure that only those employees who need access to your
        personal information to fulfil their employment duties will have access
        to it. We may use and disclose your personal or account information for
        the following purposes:
      </p>
      <br />
      <ul>
        <li>
          To provide the Site and Services to you and to other users of the Site
          and Services;
        </li>
        <li>
          To improve the quality of the Site and Services through polls, surveys
          and other similar feedback gathering activities conducted by OneApp;
        </li>
        <li>
          To create, manage and control your account information, and to verify
          access rights to the Site and Services;
        </li>
        <li>
          To communicate with you (subject to your opt-out rights set forth in
          this Privacy Policy), including without limitation for the purpose of
          providing you with information about the Services, or informing you of
          changes or additions to the Services or of the availability of any
          other services or features we provide;
        </li>
        <li>
          To assess service levels, monitor traffic patterns and gauge
          popularity of different features and service options of the Site
          and/or Services;
        </li>
        <li>
          To enforce this Privacy Policy; To protect against fraud or error, and
          to respond to claims of any violation of our rights or those of any
          third parties;
        </li>
        <li>To respond to your requests for customer service;</li>
        <li>
          To protect the rights, property or personal safety of you, us, our
          users and the public; and
        </li>
        <li>
          As required to comply with applicable laws or as authorized by
          applicable laws.
        </li>
      </ul>
      <p>
        <br />OneApp shall not be liable to you or any other person for any
        damages that might result from unauthorized use, publication, disclosure
        or any other misuse of your personal information. <br /><br />When we
        disclose your personal information to third parties, we take reasonable
        measures to ensure that the rules set forth in this Privacy Policy are
        complied with and these third parties provide sufficient guarantees to
        implement appropriate technical and organizational measures.<br /><br />Your
        personal information may be stored and processed in any country where we
        have facilities or in which we engage third party service providers. By
        using the Services, you consent to the transfer of information to
        countries outside your country of residence, which may have different
        data protection rules than in your country. When outside of US, personal
        information is subject to the laws of the country in which it is held,
        and may be subject to disclosure to the governments, courts or law
        enforcement or regulatory agencies of such other country, pursuant to
        the laws of such country. However, our practices regarding your personal
        information will at all times continue to be governed by this Privacy
        Policy and, if applicable, we will comply with the General Data
        Protection Regulation (“GDPR”) requirements providing adequate
        protection for the transfer of personal information from the EU/EEA to
        third country. <br /><br />We may occasionally communicate with you
        regarding our products, services, news and events. You have the option
        not to receive this information. We provide an opt-out function for all
        email communications of this nature, or will cease to communicate with
        you for this purpose if you contact us and tell us not to communicate
        this information to you. The only kind of these communications that you
        may not “opt-out” of are those required to communicate announcements
        related to the Services, including information specific to your Account,
        planned Services suspensions and outages. We will attempt to minimize
        this type of communication once you have opted out.<br /><br /><b
          >Age of Consent</b
        ><br /><br />We do not knowingly provide the Services to, and will not
        knowingly collect the personal information from anyone under the age of
        consent. If you live in a country in the EU/EEA, you must be at least 16
        years old to use our Services or such greater age required in your
        country to register for or use our Services. If you live in any other
        country except those in the EU/EEA, you must be at least 13 years old to
        use our Services or such greater age required in your country to
        register for or use our Services. In addition to being of the minimum
        age required to use our Services under applicable law, if you are not
        old enough to have authority to agree to our Privacy Policy in your
        country, your parent or guardian must agree to our Privacy Policy on
        your behalf. If you have any concerns about your child’s personal
        information, please contact us at
        <b>support@oneapp.ly</b>.<br /><br />Neither the Site nor the Services
        are intended for children under 13 years of age, and no one under age 13
        may provide any personal information to, on or through the Site or
        Services. We do not knowingly collect personal information from children
        under 13. If you are under 13, do not use or provide any information to,
        on or through the Site or Services, use any of the interactive or public
        comment features, or provide any information about yourself to us,
        including your name, address, telephone number, email address, or any
        screen name or user name you may use. If we learn we have collected or
        received personal information from a child under 13 without verification
        of parental consent, we will delete that information. If you believe we
        might have any information from or about a child under 13, please
        contact us at the email address provided in the paragraph above.<br /><br /><b
          >Rights to Your Information</b
        ><br /><br />You have the right to access and edit your information at
        any time through the web interface provided as part of the Services. On
        written request and subject to proof of identity, you may access the
        personal information that we hold, use or communicate and ask that any
        necessary corrections be made, where applicable, as authorized or
        required by law. However, to make sure that the personal information we
        maintain about you is accurate and up to date, please inform us
        immediately of any change in your personal information by mail or
        e-mail.<br /><br />Under the GDPR, you may be entitled to additional
        rights, including: (i) the right to withdraw consent to processing where
        consent is the basis of processing; (ii) the right to access your
        personal information and certain other supplementary information, under
        certain conditions; (iii) the right to object to unlawful data
        processing, under certain conditions; (iv) the right to erasure of
        personal information about you, under certain conditions; (v) the right
        to demand that we restrict processing of your personal information,
        under certain conditions, if you believe we have exceeded the legitimate
        basis for processing, processing is no longer necessary, are processing,
        or believe your personal information is inaccurate; (vi) the right to
        data portability of personal information concerning you that you
        provided us in a structured, commonly used, and machine-readable format,
        under certain conditions; (vii) the right object to decisions being
        taken by automated means which produce legal effects concerning you or
        similarly significantly affect you, under certain conditions; (viii) the
        right to lodge a complaint with data protection authorities. If you want
        to learn more about your rights under the GDPR, you can visit the
        European Commission’s page on Data Protection<br /><br /><b
          >Aggregated Data</b
        ><br /><br />We may also use your personal information to generate
        Aggregated Data for internal use. “Aggregated Data” means records which
        have been stripped of information potentially identifying users, and
        which have been manipulated or combined to provide generalized,
        anonymous information. Your identity and personal information will be
        kept anonymous in Aggregated Data.<br /><br /><b
          >Security and Retention</b
        ><br /><br />We will strive to prevent unauthorized access to your
        personal information, however, no data transmission over the Internet,
        by wireless device or over the air is guaranteed to be 100% secure. We
        have implemented and maintained reasonable security procedures and
        practices (based on the nature of the information we collect) to protect
        that information from unauthorized disclosure. We will continue to
        enhance security procedures as new technologies and procedures become
        available.<br /><br /><b
          ><u
            >We strongly recommend that you do not disclose your password to
            anyone.</u
          ></b
        ><br /><br />Please remember that you control what personal information
        you provide while using the Site and Services. Ultimately, you are
        responsible for maintaining the secrecy of your identification,
        passwords and/or any personal information in your possession for the use
        of the Site and/or Services. Always be careful and responsible regarding
        your personal information. We are not responsible for, and cannot
        control, the use by others of any information which you provide to them
        and you should use caution in selecting the personal information you
        provide to others through the Site or Services. Similarly, we cannot
        assume any responsibility for the content of any personal information or
        other information which you receive from other users through the Site or
        Services, and you release us from any and all liability in connection
        with the contents of any personal information or other information which
        you may receive using the Site or Services. We cannot guarantee, or
        assume any responsibility for verifying, the accuracy of the personal
        information or other information provided by any third party. You
        release us from any and all liability in connection with the use of such
        personal information or other information of others.<br /><br />We will
        maintain your personal information for as long as it is needed, or as
        long as it is required by applicable laws, regulations, or government
        orders.<br /><br /><b>Changes to this Policy</b><br /><br />We may
        update this Privacy Policy from time to time. If we do so, we will send
        an email to users subscribed to the Company News list. We will also add
        a site banner alerting users who may not be subscribed. If the change
        materially affects the treatment of your personal data, and we have your
        email but you are not subscribed to the Company News list, we will send
        you an email. (You are responsible for ensuring that we have an
        up-to-date email for this purpose.) <br /><br /><b>Contact Us</b
        ><br /><br />If you have any questions or comments about this Privacy
        Policy or your personal information, to make an access or correction
        request, to exercise any applicable rights, to make a complaint, or to
        obtain information about our policies and practices with respect to any
        service providers, we can be reached by email at support@oneapp.ly
      </p>
    </div>
    </>
  )
}

export default index