import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import profile from "./assets/3873789-middle.png"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Grid, ListItemAvatar, ListItemText } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AirlinesIcon from '@mui/icons-material/Airlines';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Card, CardContent, Typography } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function App() {
  const listitem = [
    { icon: <DashboardIcon />, text: "Overview" },
    { icon: <CalendarMonthIcon />, text: "Leading" },
    { icon: <AdsClickIcon />, text: "Portfolio" },
    { icon: <AirlinesIcon />, text: "Swap" },
    { icon: <AgricultureIcon />, text: "Claim" }
  ];
  const footerItem = [
    {
      title: 'App',
      items: ['Leading', 'Stake', 'Swap', 'Bridge']
    },
    {
      title: 'Docs',
      items: ['GitHub', 'Documents', 'Medium', 'Audit']
    },
    {
      title: 'Social',
      items: ['Twitter', 'Community', 'Telegram', 'Discord']
    }
  ];
  const data = [
    { name: '18 March', uv: 4000, pv: 2400, amt: 2400 },
    { name: '20 March', uv: 3000, pv: 1398, amt: 2210 },
    { name: '22 March', uv: 2000, pv: 9800, amt: 2290 },
    { name: '24 March', uv: 2780, pv: 3908, amt: 2000 },
    { name: '26 March', uv: 1890, pv: 4800, amt: 2181 },
    { name: '28 March', uv: 2390, pv: 3800, amt: 2500 },
    { name: '30 March', uv: 3490, pv: 4300, amt: 2100 },
    { name: '2 April', uv: 1890, pv: 4800, amt: 2181 },
    { name: '4 April', uv: 2390, pv: 3800, amt: 2500 },
    { name: '6 April', uv: 3490, pv: 4300, amt: 2100 },
    { name: '8 April', uv: 3490, pv: 4300, amt: 2100 },
  ];
  const chartList = [
    { icon: <ImageIcon />, primary: 'Total Assets', secondary: '$87,743' },
    { icon: <WorkIcon />, primary: 'Total Supply', secondary: '$78,342' },
    { icon: <BeachAccessIcon />, primary: 'Total Borrow', secondary: '$78,342' }
  ];

  return (
    <>
      <div className='w-100' style={{ height: "100vh" }}>
        <div className='d-flex h-100'>
          <div className='bg-black' style={{ width: "250px" }}>
            <div className='d-flex justify-content-center mt-4'>
              <img style={{ height: "80px", width: "80px", borderRadius: "50%" }} src={profile} alt="" />
            </div>
            <List className='mt-3'>
              {listitem.map((item, index) => (
                <ListItem key={index} className={item.text === "Overview" ? "overview-item" : ""}>
                  <ListItemIcon style={{ color: 'white' }}>{item.icon}</ListItemIcon>
                  <ListItemText style={{ color: 'white' }} primary={item.text} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className='w-100 h-100 bg-secondary'>
            <div>
              <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar style={{ justifyContent: 'space-between' }}>
                  <div></div> {/* Empty div to push the button to the right */}
                  <Button variant="contained" style={{ backgroundColor: 'rgb(255, 72, 0)' }}>Connect</Button>
                </Toolbar>
              </AppBar>
            </div>
            <div className='bg-dark' style={{ height: "calc(100vh - 64px)", overflowY: "auto" }}>
              <div className='d-flex justify-content-center w-100 mt-3'>
                <Card sx={{ width: "70rem", backgroundColor: '#1C1C1C' }}>
                  <CardContent>
                    <List style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: '2' }}>
                      {chartList.map((item, index) => (
                        <ListItem key={index}>
                          <ListItemAvatar>
                            <Avatar>
                              {item.icon}
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={<span style={{ color: 'white' }}>{item.primary}</span>}
                            secondary={<span style={{ color: 'white' }}>{item.secondary}</span>}
                          />
                        </ListItem>
                      ))}
                    </List>
                    <AreaChart width={1100} height={250} data={data}
                      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3A281C" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#3A281C" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#5F3424" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#5F3424" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <CartesianGrid strokeDasharray="3 3" />
                      <Tooltip />
                      <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                      <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                  </CardContent>
                </Card>
              </div>
              <div className='px-5'>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <List>
                      <div className='d-flex mx-3 justify-content-start mt-4'>
                        <img style={{ height: "40px", width: "40px", borderRadius: "50%" }} src={profile} alt="" />
                      </div>
                      <ListItem className='text-white'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae ipsum dolorem ipsa. Odit quibusdam sapiente veritatis!
                      </ListItem>
                    </List>
                  </Grid>
                  {footerItem.map((section, index) => (
                    <Grid key={index} item xs={6} sm={2}>
                      <List>
                        <ListItem className='text-white' style={{ fontSize: '25px', fontWeight: 'bold' }}>
                          {section.title}
                        </ListItem>
                        <div style={{ lineHeight: '10px' }}>
                          {section.items.map((item, idx) => (
                            <ListItem key={idx} className='text-white'>
                              {item}
                            </ListItem>
                          ))}
                        </div>
                      </List>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
