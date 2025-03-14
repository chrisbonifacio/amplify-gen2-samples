# AWS Amplify Gen 2 Samples

This repository contains a collection of sample applications demonstrating various AWS Amplify Gen 2 features and integration patterns. These samples are designed to help you understand how to implement common use cases with Amplify Gen 2, a powerful toolkit for building full-stack applications on AWS.

## What is Amplify Gen 2?

Amplify Gen 2 is the next generation of AWS Amplify, providing a more streamlined developer experience with:

- TypeScript-first development
- Infrastructure as TypeScript (IaC using AWS CDK)
- Enhanced type safety across your full-stack application
- A more modular and composable architecture

## Sample Applications

This repository includes the following sample applications, each demonstrating specific Amplify Gen 2 capabilities:

### API and Data Samples

- **batch-get-item**: Demonstrates how to perform batch operations with Amplify Data
- **single-table-design**: Shows DynamoDB single-table design patterns with Amplify Gen 2
- **access-api-from-lambda**: How to access Amplify GraphQL APIs from Lambda functions
- **connect-to-postgres**: Connecting to PostgreSQL databases with Amplify Gen 2
- **eventbridge**: Integrating EventBridge with Amplify for event-driven architectures

### Auth Samples

- **oidc-auth-provider**: Using OpenID Connect providers (Auth0) with Amplify Gen 2

### Storage and File Processing

- **working-with-files**: File upload and management workflows
- **upload-confirmation**: Confirming file uploads with notifications
- **sharp**: Image processing with the Sharp library

### AI/ML Service Integration

- **bedrock**: Integrating with Amazon Bedrock for generative AI
- **polly**: Text-to-speech conversion with Amazon Polly
- **rekognition**: Image analysis with Amazon Rekognition
- **translate**: Language translation with Amazon Translate

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or later)
- [AWS Account](https://docs.amplify.aws/react/start/account-setup/)
- [Amplify CLI Gen 2](https://docs.amplify.aws/gen2/start/installation/)

### Installation and Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/chrisbonifacio/amplify-gen2-samples.git
   cd amplify-gen2-samples
   ```

2. Navigate to the sample project you want to explore:
   ```bash
   cd <sample-name>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Initialize your sandbox environment:
   ```bash
   npx ampx sandbox
   ```

5. Start the development server:
   ```bash
   npm run dev
   ```

## Sample Usage Patterns

### Working with Data

The samples demonstrate various patterns for working with data:

- Creating, reading, updating, and deleting data using Amplify Data
- Custom resolvers with JavaScript utility functions
- Batch operations and optimization techniques
- Integration with relational databases

### Authentication Flows

You'll find examples of:

- Email/password authentication
- Social provider authentication
- Custom OIDC providers
- Authorization rules and patterns

### File Storage and Processing

Explore patterns for:

- Uploading and retrieving files
- Processing images and other file types
- Event-triggered file processing
- Storage authorization rules

### AI/ML Integration

Discover how to leverage AWS AI services:

- Text generation with Amazon Bedrock
- Image analysis with Rekognition
- Language translation
- Text-to-speech with Polly

## Deploying to AWS

When you're ready to deploy a sample to your AWS account:

```bash
npx ampx sandbox
```

## Learning Resources

- [Amplify Gen 2 Documentation](https://docs.amplify.aws/gen2/)
- [AWS Amplify Community Discord Server](https://discord.gg/SgFzzwxz)

## Contributing

We welcome contributions to improve these samples or add new ones. Please follow the standard GitHub flow:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This repository is licensed under the MIT-0 License. See the LICENSE file for details.

---

We hope these samples help you get started with AWS Amplify Gen 2! If you have questions or encounter issues, please open an issue in this repository or reach out to the AWS Amplify team through the community channels.

## Support

- Data: https://github.com/aws-amplify/amplify-data/issues
- API: https://github.com/aws-amplify/amplify-category-api/issues
- Backend: https://github.com/aws-amplify/amplify-backend/issues
