pipeline {
agent any
tools {
    nodejs 'NodeJS_24'
    jdk 'JDK25'
}
stages {
    stage('Checkout Code') {
        steps {
            git branch: 'main',
            url: 'https://github.com/Wish206/CYDRA-SOCIAL.git'
        }
    }

    stage('Install Dependencies') {

        steps {

            bat 'npm install'
            bat 'npx playwright install'
        }
    }

    stage('Run Playwright Tests') {

        steps {

            bat 'npm run chrome'
        }
    }

//     stage('Check Allure') {
//     steps {
//         bat 'where allure'
//         bat 'allure --version'
//     }
// }

    stage('Generate Allure Report') {

        steps {

            bat 'npm run allure:generate'
        }
    }
}

post {

    always {

        archiveArtifacts artifacts: 'screenshots/*.png',
        allowEmptyArchive: true

        publishHTML(target: [
            allowMissing: true,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'reports',
            
        ])
    }

    success {

        echo 'Pipeline Executed Successfully'
    }

    failure {

        echo 'Pipeline Failed'
    }
}

}