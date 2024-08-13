import React, { useState, useEffect } from "react";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';

import Card from "../../components/dashboard/Card";
// import ClassIcon from "@material-ui/icons/Class";
// import HomeWorkIcon from "@material-ui/icons/HomeWork";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// import BrandingWatermarkIcon from "@material-ui/icons/BrandingWatermark";
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined';

function Cards({ counts }) {
  const [students, setstudents] = useState(0);
  const [staff, setstaff] = useState(0);
  const [classes, setclasses] = useState(0);
  const [campuses, setcampuses] = useState(0);
  const [course, setcourse] = useState(0);
  const [divisions, setdivisions] = useState(0);

  useEffect(() => {
    setstudents(counts?.students);
    setstaff(counts?.staff);
    setclasses(counts?.classes);
    setcourse(counts?.courses);
    setcampuses(counts?.campuses);
    setdivisions(counts?.divisions);
  }, [counts]);

  return (
    <div className="row">
      <Card
        icon={<SchoolOutlinedIcon style={{ fontSize: 55, color: "#ff4081" }} />}
        value={students}
        title="Students"
        message="Registered Students"
        link="/students"
      />
      <Card
        icon={<PeopleAltIcon style={{ fontSize: 45, color: "#32CD32" }} />}
        value={staff}
        title="Teachers"
        message="Registered Teachers"
        link="/staff"

      />
      <Card
        icon={<InsertChartOutlinedIcon style={{ fontSize: 45, color: "#fbc02d" }} />}
        value={classes}
        title="Classes"
        message="Registered Classes"
        link="/academics/classes"
      />
      {/* <Card
        icon={<BrandingWatermarkIcon />}
        value={divisions}
        title="Divisions"
        message="Registered "
        link="/academics/divisions"
      />
      <Card
        icon={<HomeWorkIcon />}
        value={campuses}
        title="Campuses"
        message="Registered Campuses"
        link="/students/campus"
      /> */}
      <Card
        icon={<ImportContactsIcon style={{ fontSize: 45, color: "#00bcd4" }} />}
        value={course}
        title="Courses"
        message="Registered Cources"
        link="/academics/courses"
      />
    </div>
  );
}

export default Cards;
