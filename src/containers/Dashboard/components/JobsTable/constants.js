import React from 'react'
import Button from '../../../../components/Button'

export const dataSource = [
  {
    key: '1',
    id: 'KJjlkdjflkdsjfkldsjfkl',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Moving',
    status: 'OPEN',
    contractors: [
      {
        contractor: {
          firstName: 'Dave',
          lastName: 'Thomas'
        }
      },
      {
        contractor: {
          firstName: 'George',
          lastName: 'Harrison'
        }
      }
    ]
  },
  {
    key: '1',
    id: 'anior[vnkan',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Lawn Care',
    status: 'CLAIMED',
    contractors: [
      {
        contractor: {
          firstName: 'John',
          lastName: 'Lennon'
        }
      },
      {
        contractor: {
          firstName: 'Ringo',
          lastName: 'Star'
        }
      }
    ]
  },
  {
    key: '3',
    id: 'eionvan',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Moving',
    status: 'OPEN',
    contractors: [
      {
        contractor: {
          firstName: 'Dave',
          lastName: 'Thomas'
        }
      },
      {
        contractor: {
          firstName: 'George',
          lastName: 'Harrison'
        }
      }
    ]
  },
  {
    key: '4',
    id: 'anior[vnkan',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Lawn Care',
    status: 'CLAIMED',
    contractors: [
      {
        contractor: {
          firstName: 'John',
          lastName: 'Lennon'
        }
      },
      {
        contractor: {
          firstName: 'Ringo',
          lastName: 'Star'
        }
      }
    ]
  },
  {
    key: '5',
    id: 'eifdfsnvan',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Moving',
    status: 'OPEN',
    contractors: [
      {
        contractor: {
          firstName: 'Dave',
          lastName: 'Thomas'
        }
      },
      {
        contractor: {
          firstName: 'George',
          lastName: 'Harrison'
        }
      }
    ]
  },
  {
    key: '6',
    id: 'adf nl;in',
    scheduledDate: 'Monday June 5, 2019',
    scheduledTime: '9:00 am',
    jobType: 'Lawn Care',
    status: 'CLAIMED',
    contractors: [
      {
        contractor: {
          firstName: 'John',
          lastName: 'Lennon'
        }
      },
      {
        contractor: {
          firstName: 'Ringo',
          lastName: 'Star'
        }
      }
    ]
  }
]

export const columns = [
  {
    title: 'Date',
    dataIndex: 'scheduledDate',
    key: 'scheduledDate'
  },
  {
    title: 'Time',
    dataIndex: 'scheduledTime',
    key: 'scheduledTime'
  },
  {
    title: 'Job Type',
    dataIndex: 'jobType',
    key: 'jobType'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: 'Workers',
    dataIndex: 'contractors',
    key: 'id',
    render: contractors => (
      <span>
        {contractors.map(elt => (
          <div>{`${elt.contractor.firstName} ${elt.contractor.lastName}`}</div>
        ))}
      </span>
    )
  }
]

export const currentJobActions = {
  title: 'Actions',
  dataIndex: 'contractors',
  key: 'contractors',
  // eslint-disable-next-line no-unused-vars
  render: (text, record) => <Button secondary>Job Info</Button>
}

export const pastJobActions = {
  title: 'Actions',
  dataIndex: 'contractors',
  key: 'contractors',
  // eslint-disable-next-line no-unused-vars
  render: (text, record) => <Button secondary>Add Tip</Button>
}
