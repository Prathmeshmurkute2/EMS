const employees = [
  {
    "id": 1,
    "email": "employee1@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskDescription": "Create login UI for application",
        "taskDate": "2025-01-05",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Fix navbar responsiveness issue",
        "taskDate": "2025-01-02",
        "category": "Frontend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "taskDescription": "Integrate third-party UI library",
        "taskDate": "2025-01-01",
        "category": "UI"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskDescription": "Design MongoDB schema for users",
        "taskDate": "2025-01-06",
        "category": "Database"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Create REST API for user registration",
        "taskDate": "2025-01-03",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Add validation middleware",
        "taskDate": "2025-01-02",
        "category": "Backend"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "taskDescription": "Optimize database query performance",
        "taskDate": "2025-01-01",
        "category": "Database"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskDescription": "Implement JWT authentication",
        "taskDate": "2025-01-07",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Hash passwords using bcrypt",
        "taskDate": "2025-01-04",
        "category": "Security"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "taskDescription": "Add refresh token logic",
        "taskDate": "2025-01-03",
        "category": "Auth"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskDescription": "Build admin dashboard UI",
        "taskDate": "2025-01-08",
        "category": "Dashboard"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Create sidebar navigation",
        "taskDate": "2025-01-05",
        "category": "UI"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Add charts for analytics",
        "taskDate": "2025-01-04",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "taskDescription": "Integrate real-time updates",
        "taskDate": "2025-01-02",
        "category": "Realtime"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@company.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "complete": false,
        "failed": false,
        "taskDescription": "Write unit tests for APIs",
        "taskDate": "2025-01-09",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "complete": true,
        "failed": false,
        "taskDescription": "Setup Postman collection",
        "taskDate": "2025-01-06",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "complete": false,
        "failed": true,
        "taskDescription": "Configure CI pipeline",
        "taskDate": "2025-01-05",
        "category": "DevOps"
      }
    ]
  }
]


const admin = [{
    "id": 101,
    "email": "admin@company.com",
    "password": "123"
  }
]

export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin));
}

export const getLocalStorage = ()=>{
   const employees2 = JSON.parse(localStorage.getItem('employees'));
   const admin2 = JSON.parse(localStorage.getItem('admin'))

    return {employees2,admin2}
}