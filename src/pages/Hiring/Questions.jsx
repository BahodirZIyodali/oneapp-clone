import React from "react";

const Questions = () => {
  return (
    <div className="container">
      <h2 className="question-title">Frequently Asked Questions</h2>
      <p className="question-desc">
        You can find answers to many of your questions here.
      </p>
      <div className="question-list">
        <h3 className="list-title">Is OneApp paid?</h3>
        <p className="list-desc">
          OneApp is completely free for job seekers. If you are an employer, we
          offer various free and paid plans.
        </p>
      </div>
      <hr />

      <div className="question-list">
        <h3 className="list-title">
          Can I use OneApp for Free as an employer?
        </h3>
        <p className="list-desc">
          Of course! We offer a free plan that includes 1 free job post per
          month, as well as access to our basic Applicant Tracking System. If
          you want to post more than 1 vacancy a month, you can purchase each
          additional vacancy for $5.
        </p>
      </div>
      <hr />
      <div className="question-list">
        <h3 className="list-title">
          Do you offer a free trial for paid features?
        </h3>
        <p className="list-desc">
          Yes we do. Please contact our Sales department and we will hook you up
          with a free trial.
        </p>
      </div>
      <hr />
      <div className="question-list">
        <h3 className="list-title">What payment options do you accept?</h3>
        <p className="list-desc">
          We accept digital payments through Visa, Mastercard, Uzcard, and Humo.
          If you want to pay using a wire transfer, contact us to arrange it.
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Questions;
