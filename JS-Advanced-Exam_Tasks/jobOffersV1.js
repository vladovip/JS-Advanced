class JobOffers {
    constructor(employer, position) {
        this.employer = employer
        this.position = position
        this.jobCandidates = []
    }
 
    jobApplication(candidates) {
        candidates.forEach((candidate) => {
            let [name, education, experience] = candidate.split("-")
            experience = Number(experience)
 
            let isFound = this.jobCandidates.find((person) => person.name === name)
 
            if (!isFound) {
                this.jobCandidates.push({ name, education, experience })
            } else {
                this.jobCandidates.map((person) => {
                    if (person.name === isFound.name) {
                        if (person.experience < experience) {
                            person.experience = experience
                        }
                    }
                    return person
                })
            }
        })
        let employees = []
        this.jobCandidates.forEach((x) => employees.push(x.name))
        return `You successfully added candidates: ${employees.join(", ")}.`
 
    }
 
    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split("-")
        minimalExperience = Number(minimalExperience)
        let employee = this.jobCandidates.find((person) => person.name === name)
 
        if (!employee) {
            throw new Error(`${name} is not in the candidates list!`)
        }
        if (minimalExperience > employee.experience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years."`)
        }
 
        this.jobCandidates.map((person) => {
            if (person.name === name) {
                person.experience = "hired"
            }
            return person
        })
        return `Welcome aboard, our newest employee is ${name}.`
    }
 
    salaryBonus(name) {
        let employee = this.jobCandidates.find((person) => person.name === name)
 
        if (!employee) {
            throw new Error(`${name} is not in the candidates list!`)
        }
 
        if (employee.education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (employee.education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
 
 
    }
 
    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error(`Candidate Database is empty!`)
        }
        let output = ""
        let sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name))
        sortedCandidates.forEach((x) =>{
            output += `\n${x.name}-${x.experience}`
        })
 
        return `Candidates list:\n${output.trim()}`
    }
}