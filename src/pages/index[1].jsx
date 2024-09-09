import React from "react";
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosArrowDown,
    IoMdShare,
    IoIosHeartEmpty,
    IoMdDownload,
} from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import "../index[2].css";

const Jobs = () => {
    return (
        <div className="jobs-bg">
            <div className="jobs-body">
                <div className="tabs-box">
                    <div className="job-tabs-box">
                        <IoIosArrowBack className="nav-icon" />
                        <ul className="tabs">
                            <li>All India Govt. Jobs</li>
                            <li className="active">State Govt. Jobs</li>
                            <li>Bank Jobs</li>
                            <li>Teaching Jobs</li>
                            <li>Engineering Jobs</li>
                            <li>Railway Jobs</li>
                        </ul>
                        <IoIosArrowForward className="nav-icon" />
                    </div>

                    <div className="links-box">
                        <IoIosArrowBack className="nav-icon" />
                        <ul className="links">
                            <li>Syllabus</li>
                            <li>PQP</li>
                            <li>Answer Key</li>
                            <li>Results</li>
                            <li>Cut-Off</li>
                        </ul>
                        <IoIosArrowForward className="nav-icon" />
                    </div>
                </div>

                <div className="filters-box">
                    <h4>State Govt. Jobs</h4>

                    <div className="filters">
                        <div>
                            <span>All</span>
                        </div>
                        <div>
                            <span>Andhra Pradesh</span>
                            <IoIosArrowDown className="icon" />
                        </div>
                        <div>
                            <span>Qualification</span>
                            <IoIosArrowDown className="icon" />
                        </div>
                    </div>
                    <div className="mob-filters">
                        <IoFilter />
                        <span>Filters</span>
                    </div>
                </div>

                <ul className="jobs-list">
                    <li>
                        <div className="job-desc">
                            <h5>Medical & Health Department</h5>
                            <span>Arogya Mitras & Team Leaders - 19 POSTS</span>
                            <p>
                                Tezpur University has given an employment notification for the recruitment of Professor,
                                Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in
                                the Vacancy details & completed all eligibility criteria can read the notification &
                                Apply Online.
                            </p>
                        </div>
                        <div className="job-details">
                            <p>
                                <span>Qualification:</span> B.Sc (Nursing)/M.Sc (Nursing)/B.Pharmacy/Ph armacy-D/B.Sc
                            </p>
                            <p>
                                <span>Post Date:</span> 3rd Mar, 2024
                            </p>
                            <p>
                                <span>Last Date:</span> 1st June, 2024
                            </p>
                        </div>

                        <div className="job-actions">
                            <div>
                                <IoMdShare className="icon" />
                                <IoIosHeartEmpty className="icon" />
                            </div>
                            <div>
                                <button className="notif">
                                    <IoMdDownload /> Notification
                                </button>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="job-desc">
                            <h5>Medical & Health Department</h5>
                            <span>Arogya Mitras & Team Leaders - 19 POSTS</span>
                            <p>
                                Tezpur University has given an employment notification for the recruitment of Professor,
                                Asst Professor, Associate Professor Vacancy. Eligible Candidates who are interested in
                                the Vacancy details & completed all eligibility criteria can read the notification &
                                Apply Online.
                            </p>
                        </div>
                        <div className="job-details">
                            <p>
                                <span>Qualification:</span> B.Sc (Nursing)/M.Sc (Nursing)/ B.Pharmacy/ Ph armacy-D/B.Sc
                            </p>
                            <p>
                                <span>Post Date:</span> 3rd Mar, 2024
                            </p>
                            <p>
                                <span>Last Date:</span> 1st June, 2024
                            </p>
                        </div>

                        <div className="job-actions">
                            <div>
                                <IoMdShare className="icon" />
                                <IoIosHeartEmpty className="icon" />
                            </div>
                            <div>
                                <button className="notif">
                                    <IoMdDownload /> Notification
                                </button>
                                <button>Apply Now</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Jobs;
