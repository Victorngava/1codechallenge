const prompt=require('prompt-sync')({sigint:true})
// Function to calculate Payee (Tax) based on the provided tax rates
function calculatePayee(grossSalary) {
    if (grossSalary <= 24000) {
        return 0;
    } else if (grossSalary <= 32000) {
        return (grossSalary - 24000) * 0.1;
    } else if (grossSalary <= 80000) {
        return 800 + ((grossSalary - 32000) * 0.25);
    } else if (grossSalary <= 180000) {
        return 7600 + ((grossSalary - 80000) * 0.3);
    } else if (grossSalary <= 314285) {
        return 21800 + ((grossSalary - 180000) * 0.3);
    } else {
        return 54030 + ((grossSalary - 314285) * 0.35);
    }
}

// Function to calculate NHIF Deductions based on provided rates
function calculateNHIF(grossSalary) {
    if (grossSalary <= 5999) {
        return 150;
    } else if (grossSalary <= 7999) {
        return 300;
    } else if (grossSalary <= 11999) {
        return 400;
    } else if (grossSalary <= 14999) {
        return 500;
    } else if (grossSalary <= 19999) {
        return 600;
    } else if (grossSalary <= 24999) {
        return 750;
    } else if (grossSalary <= 29999) {
        return 850;
    } else if (grossSalary <= 34999) {
        return 900;
    } else if (grossSalary <= 39999) {
        return 950;
    } else if (grossSalary <= 44999) {
        return 1000;
    } else if (grossSalary <= 49999) {
        return 1100;
    } else if (grossSalary <= 59999) {
        return 1200;
    } else if (grossSalary <= 69999) {
        return 1300;
    } else if (grossSalary <= 79999) {
        return 1400;
    } else if (grossSalary <= 89999) {
        return 1500;
    } else if (grossSalary <= 99999) {
        return 1600;
    } else {
        return 1700;
    }
}
// Function to calculate NSSF Deductions based on Tier I and Tier II contributions
function calculateNSSF(grossSalary) {
    let tierIContribution = Math.min(0.06 * grossSalary, 420); // Up to 7,000 limit
    let tierIIContribution = Math.min(0.06 * grossSalary, 2160); // 7,001 - 36,000 limit
    
    return tierIContribution + tierIIContribution;
}
function calculateNetSalary(basicSalary, benefits){

    const totalTax=calculateTax(basicSalary)* basicSalary
    console.log(totalTax)
    constPAYE= totalTax-2400
    const grossSalary = basicSalary + benefits;
    //Calculate NHIF deduction

    const nhifDeduction= calculateNHIFDeductions (grossSalary);
    //Calculate calculateNSSF pay for NSSF contributions

    //Calculate for Tier I and Tier II
    const nssfContributions = calculateNSSF(basicSalary)

    //Calculate total deductions -NHIF + NSSF
    const totalDedctions = nhifDeduction + nssfContributions + PAYE
    const netSalary = basicSalary - totalDedctions;

    return netSalary;
}
const benefits=parseInt(prompt("enter the benefits; "))
const basicSalary=parseInt(prompt("enter the basic salary; "))

console.log(calculateNetSalary(basicSalary,benefits))















































