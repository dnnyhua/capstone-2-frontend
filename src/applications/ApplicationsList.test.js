import React from "react";
import { render } from "@testing-library/react";
import ApplicationsList from "./ApplicationsList";
import { MemoryRouter } from "react-router";

it("matches snapshot with applications", function () {
    let applications = [
        {
            "id": 1,
            "jobId": 2,
            "walkerId": 1,
            "firstName": "Johnny",
            "lastName": "Bravo",
            "rate": 20,
            "bio": "huge dog lover",
            "status": "Hired",
            "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNF8-gfvx__gaeVMxKBA2uxYZWju8XBV3_P0Rmsl_9lAcFVJCts7MZbNbE0bnARq1FFE&usqp=CAU"
        },
        {
            "id": 3,
            "jobId": 2,
            "walkerId": 2,
            "firstName": "Tom",
            "lastName": "Holland",
            "rate": 25,
            "bio": "I have experience walking dogs of all sizes",
            "status": "Job filled",
            "profileImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIYoCdF6ixsv0vzgejZMsBkpTYbh93v-67nbZk_hj2NBjVa5j3zrLMGr17T9OBMqWVzA&usqp=CAU"
        }
    ];
    const { asFragment } = render(
        <MemoryRouter>
            <ApplicationsList applications={applications} />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});


it("matches snapshot without applications", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <ApplicationsList />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

