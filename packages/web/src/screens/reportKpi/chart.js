import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Create, FlexForm, TextInput, required, translate, EditorInput, DateTimeInput } from 'ra';
import { Grid } from '@material-ui/core';
import compose from 'recompose/compose';
import { PasswordInput } from 'react-admin';
import { Chart } from "react-google-charts";
import {
  RadarChart,
  PolarGrid,
  PolarRadiusAxis,
  PolarAngleAxis,
  Radar,
  AreaChart,
  Area,
  Legend,
  Treemap,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  PieChart,
  Pie,
 
  ResponsiveContainer,
} from 'recharts';

//January, February, March, April, May, June, July, August, September, October, November, December



 const data = [
  ["Status", "Percentage"],
  ["Completed projects", 800],
  ["Pending projects", 600],
  ["Stopped projects", 400],
  
];

 const options = {
  backgroundColor: 'transparent',
  title: "Project statistic",
};



const data3 = [
  {
    name: 'Fund 1',
    "Requested budget(1k Ada)": 1000,
    "Transferred amount (1k Ada)": 700,
    "Remained amount (1k Ada)": 300,
  },
  {
    name: 'Fund 2',
    "Requested budget(1k Ada)": 2500,
    "Transferred amount (1k Ada)": 2400,
    "Remained amount (1k Ada)": 100,
  },
  {
    name: 'Fund 3',
    "Requested budget(1k Ada)": 3000,
    "Transferred amount (1k Ada)": 2000,
    "Remained amount (1k Ada)": 1000,
  },
  {
    name: 'Fund 4',
    "Requested budget(1k Ada)": 3000,
    "Transferred amount (1k Ada)": 3000,
    "Remained amount (1k Ada)": 500,
  },
  {
    name: 'Fund 5',
    "Requested budget(1k Ada)": 4500,
    "Transferred amount (1k Ada)": 3500,
    "Remained amount (1k Ada)": 100,
  },
  {
    name: 'Fund 6',
    "Requested budget(1k Ada)": 5000,
    "Transferred amount (1k Ada)": 4000,
    "Remained amount (1k Ada)": 1000,
  },
  {
    name: 'Fund 7',
    "Requested budget(1k Ada)": 6500,
    "Transferred amount (1k Ada)": 500,
    "Remained amount (1k Ada)": 6000,
  },
];

const data4 = [
  {
    name: 'Fund 1',
    "Approved projects": 100,
    "Completed projects": 24,
    "Pending projects": 76,
  },
  {
    name: 'Fund 1',
    "Approved projects": 120,
    "Completed projects": 80,
    "Pending projects": 40,
  },
  {
    name: 'Fund 1',
    "Approved projects": 160,
    "Completed projects": 100,
    "Pending projects": 60,
  },
  {
    name: 'Fund 1',
    "Approved projects": 200,
    "Completed projects": 150,
    "Pending projects": 50,
  },
  {
    name: 'Fund 1',
    "Approved projects": 220 ,
    "Completed projects": 120,
    "Pending projects": 100,
  },
  {
    name: 'Fund 1',
    "Approved projects": 250,
    "Completed projects": 150,
    "Pending projects": 100,
  },
  {
    name: 'Fund 1',
    "Approved projects": 300,
    "Completed projects": 20,
    "Pending projects": 280,
  },
];



const data5 = [
  ["Status", "Percentage"],
  ["Transferred amount (Ada)", 15000000],
  ["Pending amount (Ada)", 10000000],
];

 const options5 = {
  backgroundColor: 'transparent',
  title: "Summarized fund",
};


class CreatePostJob extends Component {
  render() {
    const { props } = this;

 
    return (
      <div>
        <Grid middle container spacing={4} direction="row" justifyContent="center" alignItems="center" >
          <Grid middle item xs={12} sm={6} >
            <div>Fund statistic (1k Ada)</div>
            <br />
            <BarChart width={730} height={280} data={data3}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis/>
              <Tooltip />
              <Legend style={{fontSize: 10}}/>
              <Bar dataKey="Requested budget(1k Ada)" fill="#8884d8" />
              <Bar dataKey="Transferred amount (1k Ada)" fill="#82ca9d" />
              <Bar dataKey= "Remained amount (1k Ada)" fill="#d88884" />
              
            </BarChart>
          </Grid>
        
          <Grid middle item xs={12} sm={6}>
          <div>Project statistic</div>
            <br />
            <BarChart width={730} height={280} data={data4}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend style={{fontSize: 10}}/>
              <Bar dataKey= "Approved projects" fill="#8884d8" />
              <Bar dataKey="Completed projects" fill="#82ca9d" />
              <Bar dataKey="Pending projects" fill="#8884d8" />
            </BarChart>{' '}
          </Grid>
         
          <Grid right item xs={12} sm={6}>
          <Chart
         
      chartType="PieChart"
      data={data5}
      options={options5}
      width={"100%"}
      height={"300px"}
    />
          </Grid>
          <Grid middle item xs={12} sm={6}>


            
<Chart

chartType="PieChart"
data={data}
options={options}
width={"100%"}
height={"300px"}
/>
</Grid>
        </Grid>
      </div>
    );
  }
}

CreatePostJob.propTypes = {
  translate: PropTypes.func,
  hasList: PropTypes.bool,
  hasShow: PropTypes.bool,
  hasCreate: PropTypes.bool,
  hasEdit: PropTypes.bool,
  staticcontext: PropTypes.any,
};
CreatePostJob.detaultProps = {
  hasList: true,
  hasShow: true,
  hasCreate: false,
  hasEdit: false,
};

const enhance = compose(translate);
export default enhance(CreatePostJob);
