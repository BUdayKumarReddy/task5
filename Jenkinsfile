pipeline {
    agent any

    environment {
        APP_NAME = "Three-Tier-App"
    }

    stages {

        stage('Checkout Source Code') {
            steps {
                echo "Cloning GitHub Repository..."
                checkout scm
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Verify Files') {
            steps {
                sh 'ls -la'
                dir('backend') {
                    sh 'ls -la'
                }
                dir('frontend') {
                    sh 'ls -la'
                }
            }
        }

        stage('Build') {
            steps {
                echo "Build completed successfully."
            }
        }

        stage('Deploy Backend') {
            steps {
                echo "Deploying Backend..."
                sh '''
                cd backend
                pm2 restart backend || pm2 start server.js --name backend
                '''
            }
        }

        stage('Deploy Frontend') {
            steps {
                echo "Deploying Frontend...Frontend is already deployed to Nginx. Skipping deployment."
            }
        }
    }

    post {
        success {
            echo "====================================="
            echo "Deployment Successful!"
            echo "====================================="
        }

        failure {
            echo "====================================="
            echo "Deployment Failed!"
            echo "Check the Console Output."
            echo "====================================="
        }
    }
}
