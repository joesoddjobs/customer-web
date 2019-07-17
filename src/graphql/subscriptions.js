// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateContractor = `subscription OnCreateContractor {
  onCreateContractor {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
      }
      nextToken
    }
    phoneNumber
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    Franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
    photo {
      bucket
      key
      region
    }
    income {
      yearToDate
      total
    }
    birthDate
    rating
    reviews {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onUpdateContractor = `subscription OnUpdateContractor {
  onUpdateContractor {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
      }
      nextToken
    }
    phoneNumber
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    Franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
    photo {
      bucket
      key
      region
    }
    income {
      yearToDate
      total
    }
    birthDate
    rating
    reviews {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onDeleteContractor = `subscription OnDeleteContractor {
  onDeleteContractor {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
      }
      nextToken
    }
    phoneNumber
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    Franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
    photo {
      bucket
      key
      region
    }
    income {
      yearToDate
      total
    }
    birthDate
    rating
    reviews {
      items {
        id
      }
      nextToken
    }
    createdAt
  }
}
`;
export const onCreateContractorJob = `subscription OnCreateContractorJob {
  onCreateContractorJob {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
  }
}
`;
export const onUpdateContractorJob = `subscription OnUpdateContractorJob {
  onUpdateContractorJob {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
  }
}
`;
export const onDeleteContractorJob = `subscription OnDeleteContractorJob {
  onDeleteContractorJob {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
  }
}
`;
export const onCreateContractorWorkReview = `subscription OnCreateContractorWorkReview {
  onCreateContractorWorkReview {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    workReview {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      contractors {
        nextToken
      }
      review
      rating
      job {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      createdAt
    }
  }
}
`;
export const onUpdateContractorWorkReview = `subscription OnUpdateContractorWorkReview {
  onUpdateContractorWorkReview {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    workReview {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      contractors {
        nextToken
      }
      review
      rating
      job {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      createdAt
    }
  }
}
`;
export const onDeleteContractorWorkReview = `subscription OnDeleteContractorWorkReview {
  onDeleteContractorWorkReview {
    id
    contractor {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      phoneNumber
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      Franchise {
        id
        name
        rating
      }
      photo {
        bucket
        key
        region
      }
      income {
        yearToDate
        total
      }
      birthDate
      rating
      reviews {
        nextToken
      }
      createdAt
    }
    workReview {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      contractors {
        nextToken
      }
      review
      rating
      job {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      createdAt
    }
  }
}
`;
export const onCreateCustomer = `subscription OnCreateCustomer {
  onCreateCustomer {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    favoriteContractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    phoneNumber
  }
}
`;
export const onUpdateCustomer = `subscription OnUpdateCustomer {
  onUpdateCustomer {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    favoriteContractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    phoneNumber
  }
}
`;
export const onDeleteCustomer = `subscription OnDeleteCustomer {
  onDeleteCustomer {
    id
    firstName
    lastName
    email
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    favoriteContractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    phoneNumber
  }
}
`;
export const onCreateWorkReview = `subscription OnCreateWorkReview {
  onCreateWorkReview {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    contractors {
      items {
        id
      }
      nextToken
    }
    review
    rating
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
    createdAt
  }
}
`;
export const onUpdateWorkReview = `subscription OnUpdateWorkReview {
  onUpdateWorkReview {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    contractors {
      items {
        id
      }
      nextToken
    }
    review
    rating
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
    createdAt
  }
}
`;
export const onDeleteWorkReview = `subscription OnDeleteWorkReview {
  onDeleteWorkReview {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    contractors {
      items {
        id
      }
      nextToken
    }
    review
    rating
    job {
      id
      customer {
        id
        firstName
        lastName
        email
        phoneNumber
      }
      status
      contractors {
        nextToken
      }
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      jobType
      numberOfWorkers
      estimatedTime
      actualTime
      jobDescription
      firstChoiceDate
      secondChoiceDate
      preferredMethodOfContact
      rate
      franchise {
        id
        name
        rating
      }
    }
    createdAt
  }
}
`;
export const onCreateFranchise = `subscription OnCreateFranchise {
  onCreateFranchise {
    id
    name
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    contractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    franchisee {
      id
      firstName
      lastName
      email
      franchise {
        id
        name
        rating
      }
    }
    rating
  }
}
`;
export const onUpdateFranchise = `subscription OnUpdateFranchise {
  onUpdateFranchise {
    id
    name
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    contractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    franchisee {
      id
      firstName
      lastName
      email
      franchise {
        id
        name
        rating
      }
    }
    rating
  }
}
`;
export const onDeleteFranchise = `subscription OnDeleteFranchise {
  onDeleteFranchise {
    id
    name
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    contractors {
      items {
        id
        firstName
        lastName
        email
        phoneNumber
        birthDate
        rating
        createdAt
      }
      nextToken
    }
    jobs {
      items {
        id
        status
        jobType
        numberOfWorkers
        estimatedTime
        actualTime
        jobDescription
        firstChoiceDate
        secondChoiceDate
        preferredMethodOfContact
        rate
      }
      nextToken
    }
    franchisee {
      id
      firstName
      lastName
      email
      franchise {
        id
        name
        rating
      }
    }
    rating
  }
}
`;
export const onCreateFranchisee = `subscription OnCreateFranchisee {
  onCreateFranchisee {
    id
    firstName
    lastName
    email
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
export const onUpdateFranchisee = `subscription OnUpdateFranchisee {
  onUpdateFranchisee {
    id
    firstName
    lastName
    email
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
export const onDeleteFranchisee = `subscription OnDeleteFranchisee {
  onDeleteFranchisee {
    id
    firstName
    lastName
    email
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
export const onCreateJob = `subscription OnCreateJob {
  onCreateJob {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    status
    contractors {
      items {
        id
      }
      nextToken
    }
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    jobType
    numberOfWorkers
    estimatedTime
    actualTime
    jobDescription
    firstChoiceDate
    secondChoiceDate
    preferredMethodOfContact
    rate
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob {
  onUpdateJob {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    status
    contractors {
      items {
        id
      }
      nextToken
    }
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    jobType
    numberOfWorkers
    estimatedTime
    actualTime
    jobDescription
    firstChoiceDate
    secondChoiceDate
    preferredMethodOfContact
    rate
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob {
  onDeleteJob {
    id
    customer {
      id
      firstName
      lastName
      email
      jobs {
        nextToken
      }
      favoriteContractors {
        nextToken
      }
      phoneNumber
    }
    status
    contractors {
      items {
        id
      }
      nextToken
    }
    address {
      addressLine1
      addressLine2
      city
      state
      postalCode
      countryCode
    }
    jobType
    numberOfWorkers
    estimatedTime
    actualTime
    jobDescription
    firstChoiceDate
    secondChoiceDate
    preferredMethodOfContact
    rate
    franchise {
      id
      name
      address {
        addressLine1
        addressLine2
        city
        state
        postalCode
        countryCode
      }
      contractors {
        nextToken
      }
      jobs {
        nextToken
      }
      franchisee {
        id
        firstName
        lastName
        email
      }
      rating
    }
  }
}
`;
