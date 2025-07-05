import React from "react";
import {
  Search,
  Plus,
  ChevronDown,
  Upload,
  Download,
  Share2,
  Grid,
  LayoutGrid,
  Filter,
  SortAsc,
  EyeOff,
  User,
  Bell,
  HelpCircle,
  Settings,
  EllipsisVertical,
  Menu,
} from "lucide-react";

const Avatar = ({ initials, src, size = "md", className = "" }) => {
  const sizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
  };
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-semibold overflow-hidden ${sizes[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt="Avatar"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

const StatusBadge = ({ status }) => {
  const statusMap = {
    "In-process": "bg-yellow-100 text-yellow-800",
    "Need to start": "bg-orange-100 text-orange-800",
    Complete: "bg-green-100 text-green-800",
    Blocked: "bg-red-100 text-red-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${statusMap[status]}`}
    >
      {status}
    </span>
  );
};

const PriorityBadge = ({ priority }) => {
  const priorityMap = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-blue-100 text-blue-800",
  };
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${priorityMap[priority]}`}
    >
      {priority}
    </span>
  );
};

const mockData = [
  {
    id: 1,
    jobRequest: "Launch social media campaign",
    submitted: "26-11-2024",
    submitter: "Aisha Patel",
    status: "In-process",
    url: "www.aishapatel@gmail.com",
    assignee: {
      name: "Sophie Choudhary",
      avatar: "https://placehold.co/32x32/FFD700/000000?text=SC",
    },
    priority: "Medium",
    dueDate: "20-11-2024",
    estValue: 6200000,
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    submitter: "Irfan Khan",
    status: "Need to start",
    url: "www.irfankhan@gmail.com",
    assignee: {
      name: "Tejas Pandey",
      avatar: "https://placehold.co/32x32/FFD700/000000?text=TP",
    },
    priority: "High",
    dueDate: "30-10-2024",
    estValue: 3500000,
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for app",
    submitted: "26-11-2024",
    submitter: "Mark Johnson",
    status: "In-process",
    url: "www.markjohnson@gmail.com",
    assignee: {
      name: "Rachel Lee",
      avatar: "https://placehold.co/32x32/FFD700/000000?text=RL",
    },
    priority: "Medium",
    dueDate: "10-12-2024",
    estValue: 4750000,
  },
  {
    id: 4,
    jobRequest: "Design new features for the website",
    submitted: "10-01-2025",
    submitter: "Emily Green",
    status: "Complete",
    url: "www.emilygreen@gmail.com",
    assignee: {
      name: "Tom Wright",
      avatar: "https://placehold.co/32x32/FFD700/000000?text=TW",
    },
    priority: "Low",
    dueDate: "15-01-2025",
    estValue: 5900000,
  },
  {
    id: 5,
    jobRequest: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    submitter: "Jessica Brown",
    status: "Blocked",
    url: "www.jessicabrown@gmail.com",
    assignee: {
      name: "Kevin Smith",
      avatar: "https://placehold.co/32x32/FFD700/000000?text=KS",
    },
    priority: "Low",
    dueDate: "30-01-2025",
    estValue: 2800000,
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800 flex flex-col">
      <header className="bg-white shadow-sm p-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <span className="text-sm font-semibold text-gray-600">
            Spreadsheet style
          </span>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium text-gray-700">Workspace</span>
            <ChevronDown size={14} className="mx-1" />
            <span className="font-medium text-gray-700">Folder 2</span>
            <ChevronDown size={14} className="mx-1" />
            <span className="font-medium text-gray-700">Spreadsheet 3</span>
            <EllipsisVertical size={16} className="ml-1 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative flex -space-x-2 mr-2">
            <Avatar
              initials="J"
              className="z-30 border-2 border-white bg-green-500 text-white"
            />
            <Avatar
              initials="A"
              className="z-20 border-2 border-white bg-red-500 text-white"
            />
            <Avatar
              initials="V"
              className="z-10 border-2 border-white bg-purple-500 text-white"
            />
            <div className="z-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold border-2 border-white">
              +9
            </div>
          </div>
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-9 pr-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-sm w-64"
            />
          </div>
          <User size={20} className="text-gray-500 cursor-pointer" />
          <Bell size={20} className="text-gray-500 cursor-pointer" />
          <HelpCircle size={20} className="text-gray-500 cursor-pointer" />
          <Settings size={20} className="text-gray-500 cursor-pointer" />
          <button
            className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            onClick={() => console.log("Add clicked")}
          >
            <Plus size={20} />
          </button>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-16 bg-gray-50 border-r border-gray-200 flex flex-col items-center py-4 space-y-6">
          <Menu size={20} className="text-gray-500 cursor-pointer" />
          <Grid size={20} className="text-gray-500 cursor-pointer" />
          <LayoutGrid size={20} className="text-gray-500 cursor-pointer" />
        </aside>
        <main className="flex-1 flex flex-col bg-white">
          <div className="p-3 border-b border-gray-200 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center space-x-4">
              <span className="text-sm font-semibold text-gray-600">
                Tool bar
              </span>
              {[
                ["Hide fields", EyeOff],
                ["Sort", SortAsc],
                ["Filter", Filter],
                ["Cell view", Grid],
              ].map(([label, Icon]) => (
                <button
                  key={label}
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm"
                  onClick={() => console.log(`${label} clicked`)}
                >
                  <Icon className="mr-1" size={16} /> {label}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              {[
                ["Import", Upload],
                ["Export", Download],
                ["Share", Share2],
              ].map(([label, Icon]) => (
                <button
                  key={label}
                  className="flex items-center px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 text-sm"
                  onClick={() => console.log(`${label} clicked`)}
                >
                  <Icon className="mr-1" size={16} /> {label}
                </button>
              ))}
              <button
                className="flex items-center px-3 py-1.5 rounded-md bg-blue-600 text-white text-sm"
                onClick={() => console.log("New clicked")}
              >
                <Plus className="mr-1" size={16} /> New
              </button>
            </div>
          </div>
          <div className="p-3 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-sm"
                onClick={() => console.log("Overview clicked")}
              >
                Q3 Financial Overview <ChevronDown size={14} className="ml-1" />
              </button>
              <button
                className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-700 text-sm"
                onClick={() => console.log("ABC clicked")}
              >
                ABC <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1.5 rounded-md bg-purple-100 text-purple-800 text-sm"
                onClick={() => console.log("Answer clicked")}
              >
                Answer a question
              </button>
              <button
                className="px-3 py-1.5 rounded-md bg-pink-100 text-pink-800 text-sm"
                onClick={() => console.log("Extract clicked")}
              >
                Extract
              </button>
            </div>
          </div>
          <div className="relative flex-1 overflow-auto">
            <table className="w-full table-auto border-collapse">
              <thead className="sticky top-0 bg-gray-50 border-b border-gray-200 z-10">
                <tr>
                  {[
                    "#",
                    "Job Request",
                    "Submitted",
                    "Submitter",
                    "Status",
                    "URL",
                    "Assignee",
                    "Priority",
                    "Due Date",
                    "Est. Value",
                  ].map((header) => (
                    <th
                      key={header}
                      className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {row.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.jobRequest}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {row.submitted}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-700">
                      {row.submitter}
                    </td>
                    <td className="px-4 py-2">
                      <StatusBadge status={row.status} />
                    </td>
                    <td className="px-4 py-2 text-sm text-blue-600 underline cursor-pointer">
                      {row.url.split("@")[0]}
                    </td>
                    <td className="px-4 py-2 text-sm flex items-center space-x-2">
                      <Avatar
                        src={row.assignee.avatar}
                        initials={row.assignee.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                        size="sm"
                      />
                      <span>{row.assignee.name}</span>
                    </td>
                    <td className="px-4 py-2">
                      <PriorityBadge priority={row.priority} />
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-500">
                      {row.dueDate}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      ₹{row.estValue.toLocaleString("en-IN")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
      <footer className="border-t border-gray-200 bg-white px-4 py-2 flex items-center space-x-6 text-sm">
        <button
          className="text-gray-900 font-medium border-b-2 border-gray-300 pb-1"
          onClick={() => console.log("All Orders clicked")}
        >
          All Orders
        </button>
        <button
          className="text-green-700 font-semibold border-b-2 border-green-600 pb-1"
          onClick={() => console.log("Pending clicked")}
        >
          Pending
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => console.log("Reviewed clicked")}
        >
          Reviewed
        </button>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={() => console.log("Arrived clicked")}
        >
          Arrived
        </button>
        <button
          className="text-gray-500 hover:text-gray-700 text-lg ml-2"
          onClick={() => console.log("Add New Tab clicked")}
        >
          +
        </button>
      </footer>
    </div>
  );
};

export default App;
