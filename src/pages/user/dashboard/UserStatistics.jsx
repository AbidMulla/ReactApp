import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

function UserStatistics() {
  // Data for the monthly points graph
  const monthlyData = [
    { name: 'January', points: 120, shortName: 'Jan' },
    { name: 'February', points: 180, shortName: 'Feb' },
    { name: 'March', points: 150, shortName: 'Mar' },
    { name: 'April', points: 220, shortName: 'Apr' },
    { name: 'May', points: 280, shortName: 'May' },
    { name: 'June', points: 250, shortName: 'Jun' },
    { name: 'July', points: 300, shortName: 'Jul' },
    { name: 'August', points: 340, shortName: 'Aug' },
    { name: 'September', points: 280, shortName: 'Sep' },
    { name: 'October', points: 220, shortName: 'Oct' },
    { name: 'November', points: 290, shortName: 'Nov' },
    { name: 'December', points: 350, shortName: 'Dec' }
  ];
  
  // Custom colors for bars with gradient effect
  const primaryColor = '#3152e8';
  const hoverColor = '#4a6af0';
  
  // Custom formatter for Y-axis ticks
  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value;
  };
  
  // Custom tooltip formatter
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{
          backgroundColor: '#fff',
          padding: '10px 14px',
          border: 'none',
          borderRadius: '6px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }}>
          <p className="label" style={{ 
            margin: '0 0 5px 0', 
            fontWeight: 600, 
            color: '#333',
            fontSize: '14px'
          }}>{label}</p>
          <p className="intro" style={{ 
            margin: '0', 
            color: '#666',
            fontSize: '13px'
          }}>
            <span style={{ 
              display: 'inline-block', 
              width: '10px', 
              height: '10px', 
              backgroundColor: primaryColor,
              borderRadius: '50%',
              marginRight: '6px'
            }}></span>
            <span style={{ fontWeight: 500 }}>{payload[0].value.toLocaleString()}</span> points
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="card" style={{ height: '400px' }}>
      <div className="card-body">
        <h5 className="card-title fw-bold border-bottom pb-2 mb-3">Monthly Progress</h5>
        <div style={{ height: '320px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 15 }}
              barGap={8}
              barCategoryGap={16}
            >
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={primaryColor} stopOpacity={1} />
                  <stop offset="95%" stopColor={primaryColor} stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis 
                dataKey="shortName" 
                axisLine={false} 
                tickLine={false}
                tick={{
                  fill: '#555', 
                  fontSize: 12,
                  fontWeight: 500,
                  dy: 10
                }}
                tickMargin={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{
                  fill: '#555', 
                  fontSize: 12,
                  fontWeight: 500
                }}
                tickFormatter={formatYAxis}
                tickMargin={10}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'rgba(0, 0, 0, 0.03)' }}
              />
              <Bar 
                dataKey="points" 
                fill="url(#barGradient)" 
                radius={[6, 6, 0, 0]}
                barSize={24}
                animationDuration={1500}
              >
                {monthlyData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill="url(#barGradient)"
                    style={{ filter: 'drop-shadow(0px 2px 3px rgba(49, 82, 232, 0.2))' }}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default UserStatistics;