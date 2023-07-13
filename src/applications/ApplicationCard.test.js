import React from "react";
import { render } from "@testing-library/react";
import ApplicationCard from "./ApplicationCard";
import { MemoryRouter } from "react-router";

it("matches snapshot with profileImage", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <ApplicationCard
                firstName="Johnny"
                lastName="Bravo"
                rate='20'
                bio="i love all dogs!"
                profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNF8-gfvx__gaeVMxKBA2uxYZWju8XBV3_P0Rmsl_9lAcFVJCts7MZbNbE0bnARq1FFE&usqp=CAU"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without profileImage", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <ApplicationCard
                firstName="Johnny"
                lastName="Bravo"
                rate='20'
                bio="i love all dogs!"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});



