import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './CourseModule.css';

function CourseModule() {
  const [expandedModule, setExpandedModule] = useState(null);
  const [modules, setModules] = useState([
    {
      id: 1,
      title: 'Module 1',
      subtitle: 'Guard & Patrol',
      content: [
        { id: 101, type: 'video', title: 'Introduction to Guard & Patrol', duration: '10:00', completed: true },
        { id: 102, type: 'quiz', title: 'Module 1 Quiz', questions: 10, completed: true },
        { id: 103, type: 'document', title: 'Guard & Patrol Manual', pages: 5, completed: true },
        { id: 104, type: 'survey', title: 'Module 1 Feedback', questions: 5, completed: true }
      ]
    },
    {
      id: 2,
      title: 'Module 2',
      subtitle: 'Security Protocols',
      content: [
        { id: 201, type: 'video', title: 'Basic Security Protocols', duration: '15:00', completed: false },
        { id: 202, type: 'document', title: 'Security Guidelines', pages: 8, completed: false },
        { id: 203, type: 'quiz', title: 'Security Protocols Quiz', questions: 15, completed: false },
        { id: 204, type: 'survey', title: 'Module 2 Feedback', questions: 5, completed: false }
      ]
    }
  ]);

  const getContentIcon = (type) => {
    switch (type) {
      case 'video':
        return 'mdi:play-circle-outline';
      case 'quiz':
        return 'mdi:help-circle-outline';
      case 'document':
        return 'mdi:file-document-outline';
      case 'survey':
        return 'mdi:clipboard-text-outline';
      default:
        return 'mdi:circle-outline';
    }
  };

  // Function removed as requested

  const toggleModule = (moduleId) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  // Toggle completion status of a content item
  const toggleCompletion = (moduleId, contentId) => {
    setModules(modules.map(module => {
      if (module.id === moduleId) {
        return {
          ...module,
          content: module.content.map(item => {
            if (item.id === contentId) {
              return { ...item, completed: !item.completed };
            }
            return item;
          })
        };
      }
      return module;
    }));
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalItems = modules.reduce((acc, module) => acc + module.content.length, 0);
    const completedItems = modules.reduce((acc, module) => 
      acc + module.content.filter(item => item.completed).length, 0);
    
    return totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
  };

  const progressPercentage = calculateProgress();

  return (
    <div className="course-content">
      <h2>Course Content</h2>
      <div className="progress-info">
        <span className='font-weight-bold font-size-16' style={{fontWeight:'bold', fontSize:'16px'}}>{progressPercentage}% completed</span>
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="modules-list">
        {modules.map(module => (
          <div key={module.id} className="module-item">
            <div 
              className={`module-header ${expandedModule === module.id ? 'expanded' : ''}`}
              onClick={() => toggleModule(module.id)}
            >
              <div className="module-title">
                <h3>{module.title}</h3>
                <p>{module.subtitle}</p>
              </div>
              <Icon 
                icon={expandedModule === module.id ? 'mdi:chevron-up' : 'mdi:chevron-down'} 
                width="24" 
                height="24" 
              />
            </div>

            {expandedModule === module.id && (
              <div className="module-content">
                {module.content.map((item) => (
                  <div key={item.id} className="content-item">
                    <div className="content-left">
                      <div className="content-icon">
                        <Icon icon={getContentIcon(item.type)} width="20" height="20" />
                      </div>
                      <div className="content-details">
                        <span className="content-title">{item.title}</span>
                        <span className="content-type">{item.type}</span>
                      </div>
                    </div>
                    <div 
                      className="content-status"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCompletion(module.id, item.id);
                      }}
                    >
                      {item.completed ? (
                        <Icon icon="mdi:check-circle" className="completed" width="24" height="24" />
                      ) : (
                        <Icon icon="mdi:circle-outline" className="pending" width="24" height="24" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseModule;