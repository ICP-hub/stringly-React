import React from "react";
import "./Guidelines.css";

const Guidelines = () => {
  return (
    <div className="p-6 md:p-10 lg:p-20 xl:px-60 leading-relaxed text-left text-justify flex flex-col gap-6 md:gap-8 lg:gap-10 padding-top h-screen">
      <h1 className="text-lg md:text-xl lg:text-2xl font-semibold font-sf">
        Child Sexual Exploitation & Abuse (CSAE) Policy
      </h1>
      <p className="text-base md:text-lg lg:text-xl">
        Stringly is deeply committed to maintaining a safe and respectful
        platform for all users. We strictly prohibit any form of child sexual
        exploitation or abuse, including content that sexualizes, exploits, or
        endangers children. This includes photos, videos, text, illustrations,
        or any material involving inappropriate conduct related to children.
        Sharing or encouraging others to share child sexual abuse material
        (CSAM) is a serious violation and will lead to immediate account removal
        and reporting to the relevant authorities.
      </p>
      <p className="text-base md:text-lg lg:text-xl">
        Discussions or content involving children must always be lawful,
        appropriate, and relevant. If users choose to include photos of children
        in their profiles, these must depict fully clothed children and include
        adults in the image. Photos where children appear alone or any images
        featuring genitalia or buttocks, even partially covered, are not
        permitted.
      </p>
      <p className="text-base md:text-lg lg:text-xl">
        Stringly adheres to all applicable laws and cooperates with
        organizations like the{" "}
        <a
          className="text-blue-700 border-b-2 border-blue-700 hover:text-blue-500"
          href="https://www.missingkids.org/HOME"
        >
          National Center for Missing and Exploited Children (NCMEC)
        </a>{" "}
        to address suspected cases of CSAE. Users can report violations via the
        “Report Abuse” feature, and appeals against enforcement actions can be
        submitted through our support channels. If you have any questions, need
        support, or wish to contact us, please reach out to us at{" "}
        <a
          className="font-sf font-semibold cursor-pointer"
          href="mailto:support@stringly.net"
        >
          support@stringly.net
        </a>
        .
      </p>
      <p className="text-base md:text-lg lg:text-xl">
        © 2025 Stringly | All Rights Reserved
      </p>
    </div>
  );
};

export default Guidelines;
