// eslint-disable
// this is an auto generated file. This will be overwritten

export const createContractor = `mutation CreateContractor($input: CreateContractorInput!) {
  createContractor(input: $input) {
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
export const updateContractor = `mutation UpdateContractor($input: UpdateContractorInput!) {
  updateContractor(input: $input) {
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
export const deleteContractor = `mutation DeleteContractor($input: DeleteContractorInput!) {
  deleteContractor(input: $input) {
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
export const createContractorJob = `mutation CreateContractorJob($input: CreateContractorJobInput!) {
  createContractorJob(input: $input) {
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
export const updateContractorJob = `mutation UpdateContractorJob($input: UpdateContractorJobInput!) {
  updateContractorJob(input: $input) {
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
export const deleteContractorJob = `mutation DeleteContractorJob($input: DeleteContractorJobInput!) {
  deleteContractorJob(input: $input) {
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
export const createContractorWorkReview = `mutation CreateContractorWorkReview($input: CreateContractorWorkReviewInput!) {
  createContractorWorkReview(input: $input) {
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
export const updateContractorWorkReview = `mutation UpdateContractorWorkReview($input: UpdateContractorWorkReviewInput!) {
  updateContractorWorkReview(input: $input) {
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
export const deleteContractorWorkReview = `mutation DeleteContractorWorkReview($input: DeleteContractorWorkReviewInput!) {
  deleteContractorWorkReview(input: $input) {
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
export const createCustomer = `mutation CreateCustomer($input: CreateCustomerInput!) {
  createCustomer(input: $input) {
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
export const updateCustomer = `mutation UpdateCustomer($input: UpdateCustomerInput!) {
  updateCustomer(input: $input) {
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
export const deleteCustomer = `mutation DeleteCustomer($input: DeleteCustomerInput!) {
  deleteCustomer(input: $input) {
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
export const createWorkReview = `mutation CreateWorkReview($input: CreateWorkReviewInput!) {
  createWorkReview(input: $input) {
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
export const updateWorkReview = `mutation UpdateWorkReview($input: UpdateWorkReviewInput!) {
  updateWorkReview(input: $input) {
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
export const deleteWorkReview = `mutation DeleteWorkReview($input: DeleteWorkReviewInput!) {
  deleteWorkReview(input: $input) {
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
export const createFranchise = `mutation CreateFranchise($input: CreateFranchiseInput!) {
  createFranchise(input: $input) {
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
export const updateFranchise = `mutation UpdateFranchise($input: UpdateFranchiseInput!) {
  updateFranchise(input: $input) {
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
export const deleteFranchise = `mutation DeleteFranchise($input: DeleteFranchiseInput!) {
  deleteFranchise(input: $input) {
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
export const createFranchisee = `mutation CreateFranchisee($input: CreateFranchiseeInput!) {
  createFranchisee(input: $input) {
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
export const updateFranchisee = `mutation UpdateFranchisee($input: UpdateFranchiseeInput!) {
  updateFranchisee(input: $input) {
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
export const deleteFranchisee = `mutation DeleteFranchisee($input: DeleteFranchiseeInput!) {
  deleteFranchisee(input: $input) {
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
export const createJob = `mutation CreateJob($input: CreateJobInput!) {
  createJob(input: $input) {
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
export const updateJob = `mutation UpdateJob($input: UpdateJobInput!) {
  updateJob(input: $input) {
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
export const deleteJob = `mutation DeleteJob($input: DeleteJobInput!) {
  deleteJob(input: $input) {
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
