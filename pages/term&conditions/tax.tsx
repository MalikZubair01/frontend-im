import { NextPage } from "next";
import Layout1 from "views/layouts/layout1";
import React, { useEffect, useState } from "react";
import { useApiData } from "helpers/data/DataContext";

interface TermCondition {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}

interface termsCon {
  terms_and_conditions :any
}

const LeftSidebar: NextPage = () => {
  const [termsAndConditions, setTermsAndConditions] = useState<TermCondition[]>(
    []
  );

  const apiData = useApiData() as termsCon;

  useEffect(() => {


    
        setTermsAndConditions(apiData.terms_and_conditions);
    
  }, []);

  const filteredTerms = termsAndConditions.filter((term) => term.id === 6 || term.id === 33);

  return (
    <Layout1>
      <section className="section-big-pt-space section-big-pb-space ratio_asos bg-light">
        <div className="custom-container">
          <div className="flex">
            <div className="accordian">
              {filteredTerms.map((term) => (
                <div key={term.id}>
                  <b>
                    <h2
                      className="title"
                      style={{
                        fontSize: "16px",
                        fontWeight: "800",
                        textTransform: "uppercase",
                        textAlign: "center",
                      }}
                    >
                      {term.title}
                    </h2>
                  </b>
                  <br />
                  <div
                    className="description"
                    style={{
                      textAlign: "justify",
                      fontSize: "14px",
                      textJustify: "inter-word",
                    }}
                    dangerouslySetInnerHTML={{ __html: term.description }}
                  />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout1>
  );
};

export default LeftSidebar;
