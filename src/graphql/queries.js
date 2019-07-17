// eslint-disable
// this is an auto generated file. This will be overwritten

export const getContractor = `query GetContractor($id: ID!) {
  getContractor(id: $id) {
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
export const listContractors = `query ListContractors(
  $filter: ModelContractorFilterInput
  $limit: Int
  $nextToken: String
) {
  listContractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getCustomer = `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
export const listCustomers = `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getWorkReview = `query GetWorkReview($id: ID!) {
  getWorkReview(id: $id) {
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
export const listWorkReviews = `query ListWorkReviews(
  $filter: ModelWorkReviewFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkReviews(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFranchise = `query GetFranchise($id: ID!) {
  getFranchise(id: $id) {
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
export const listFranchises = `query ListFranchises(
  $filter: ModelFranchiseFilterInput
  $limit: Int
  $nextToken: String
) {
  listFranchises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getFranchisee = `query GetFranchisee($id: ID!) {
  getFranchisee(id: $id) {
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
export const listFranchisees = `query ListFranchisees(
  $filter: ModelFranchiseeFilterInput
  $limit: Int
  $nextToken: String
) {
  listFranchisees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
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
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
