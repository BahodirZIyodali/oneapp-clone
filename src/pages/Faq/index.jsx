import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./style.css";

const index = () => {
  const [accordions, setAccordions] = useState([
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },
    { isOpen: false },

  ]);

  const toggleAccordion = (index) => {
    setAccordions((prevState) =>
      prevState.map((accordion, i) =>
        i === index ? { isOpen: !accordion.isOpen } : { isOpen: false }
      )
    );
  };

  return (
    <div>
      <header className="faq-head">
        <div className="container">
          <div className="faq-head-content">
            <h1 className="faq-head-title">Frequently Asked Questions</h1>
            <div className="faq-head-desc">
              Here you can find the answers to the frequently asked questions.
              In case you didn't find your question here, please, send it to us
              at support@oneapp.ly
            </div>
          </div>
        </div>
      </header>

      <main className="faq-main pt-5 pb-5">
        <div className="container">
          <div className="d-flex">
            <div className="faq-main-right">
              <h1 className="faq-main-title">For Applicants</h1>
              <div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(0)}
                  >
                    <h2>How can I register?</h2>
                    {accordions[0].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[0].isOpen && (
                    <div className="accordion-content">
                      In order to create a free account press Sign Up →
                      Applicant in the homepage and fill out the blanks, or
                      simply press here:
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(1)}
                  >
                    <h2>Is OneApp free?</h2>
                    {accordions[1].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[1].isOpen && (
                    <div className="accordion-content">
                      Yes! OneApp is completely free.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header"
                    onClick={() => toggleAccordion(2)}
                  >
                    <h2>How can I fill out my application?</h2>
                    {accordions[2].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[2].isOpen && (
                    <div className="accordion-content">
                      OneApp’s application process is fairly straightforward.
                      It’s sectioned out into 10 sections. Every section
                      contains information that is mandatory (indicated with an
                      asterix) and information that is optional. Please, write
                      about your past work experience and accomplishments since
                      it can be important for majority of employers. We highly
                      recommend completing as much of the application as
                      possible. If you still have questions and are finding the
                      application hard to complete, please, click on the FAQ
                      page and let us know about it! We will reach out to you as
                      soon as possible.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(3)}
                  >
                    <h2>How can I edit my application?</h2>
                    {accordions[3].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[3].isOpen && (
                    <div className="accordion-content">
                      You have an edit icon next to each section of the
                      application. Click on the icon and you will be able to
                      edit the application.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(4)}
                  >
                    <h2>How can I delete my application?</h2>
                    {accordions[4].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[4].isOpen && (
                    <div className="accordion-content">
                      YYou have a delete icon next to each section of the
                      application (excluding the “General information” section).
                      Click on it to delete the section.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(5)}
                  >
                    <h2>How can I apply for a job?</h2>
                    {accordions[5].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[5].isOpen && (
                    <div className="accordion-content">
                      After you have completed your application, go to the
                      “Jobs” page. There choose the job you like and click on
                      the “Apply” button. It’s as easy as that!
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(6)}
                  >
                    <h2>How can I see the progress of my application?</h2>
                    {accordions[6].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[6].isOpen && (
                    <div className="accordion-content">
                      If you applied for a job, you will get a sub-page in your
                      “My Application” page called “Applied Jobs”. You will see
                      a tag next to each application you sent which will show
                      you the progress of your application.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(7)}
                  >
                    <h2>I have a question that wasn’t answered here.</h2>
                    {accordions[7].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[7].isOpen && (
                    <div className="accordion-content">
                      Please, contact us at support@oneapp.ly and we will
                      respond to you as soon as we can.
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="faq-main-left">
              <h1 className="faq-main-title">For Employers</h1>
              <div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(8)}
                  >
                    <h2>How can I register?</h2>
                    {accordions[8].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[8].isOpen && (
                    <div className="accordion-content">
                      PIn order to create a free account press Sign Up →
                      Employer in the homepage and fill out the blanks, or
                      simply press here:
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(9)}
                  >
                    <h2>How can I post a vacancy?</h2>
                    {accordions[9].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[9].isOpen && (
                    <div className="accordion-content">
                      Go to the “Active vacancies“ page in your employer
                      dashboard and click “Create a Vacancy. Complete the
                      relevant information. Sections that are mandatory are
                      indicated with an asterix. Once completed, click “Next”,
                      confirm that everything is correct, and then “Submit”.
                      Your vacancy is now live.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(10)}
                  >
                    <h2>How can I delete a vacancy?</h2>
                    {accordions[10].isOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {accordions[10].isOpen && (
                    <div className="accordion-content">
                      You can either delete or archive a vacancy. If you delete
                      it, you will lose all previous information including
                      information on applicants that applied. If you archive it,
                      the vacancy will not be available to applicants anymore
                      but you can save all the information. If you still want to
                      delete your vacancy, go to the vacancy that you archived
                      previously and click on 'Delete' button.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(11)}
                  >
                    <h2>How can I archive a vacancy?</h2>
                    {accordions[11].isOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {accordions[11].isOpen && (
                    <div className="accordion-content">
                      Go to the “Vacancies” page in your employer dashboard.
                      Click on the vacancy you want to archive. A side-bar will
                      appear on your right where you can see the edit, archive
                      and copy tags. Click on archive. Once archived, your
                      vacancy will no longer be available for applicants but you
                      can find it in your “Archived vacancies page. You can
                      unarchive the vacancy at any time.
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(12)}
                  >
                    <h2>How can I delete my account?.</h2>
                    {accordions[12].isOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {accordions[12].isOpen && (
                    <div className="accordion-content">
                      We’re upset to see you go. You can delete your account and
                      all your data by going to Settings → Delete account.
                      However, we would greatly appreciate if you give us
                      feedback on why you are leaving by emailing at
                      support@oneapp.ly
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div
                    className="accordion-header "
                    onClick={() => toggleAccordion(13)}
                  >
                    <h2>I have a question that wasn’t answered here.</h2>
                    {accordions[13].isOpen ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </div>
                  {accordions[13].isOpen && (
                    <div className="accordion-content">
                      Please, contact us at support@oneapp.ly and we will
                      respond to you as soon as we can.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="faq-main-title"> For Universities</h1>
            <div >
                  <div
                    className="accordion-header mt-4"
                    onClick={() => toggleAccordion(14)}
                  >
                    <h2 > I'm a university representative and I would like to register my university in OneApp. How can I do this?</h2>
                    {accordions[14].isOpen ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                  {accordions[14].isOpen && (
                    <div className="accordion-content">
              We’re happy to hear that! Please, contact us at support@oneapp.ly and we will respond to you as soon as we can.
                    </div>
                  )}
                </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default index;
