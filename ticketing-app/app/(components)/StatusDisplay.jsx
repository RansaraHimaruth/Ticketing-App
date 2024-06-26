import React from 'react'

const StatusDisplay = ({status}) => {

  const getColor = (status) => {
    let color = "bg-slate-700"
    switch (status.toLowerCase()) {
      case "completed":
        color = "bg-green-200"
        return color
      case "in progress":
        color = "bg-yellow-200"
        return color
      case "not started":
        color = "bg-red-300"
        return color
        
  }
  return color;
}

  return (
    <div>
      <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
        {status}
      </span>
    </div>
  )
}

export default StatusDisplay
