import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface Step {
  number: number;
  label: string;
  sublabel: string;
}

const STEPS: Step[] = [
  { number: 1, label: "Inputs", sublabel: "Operational & Financial Data" },
  { number: 2, label: "Insights", sublabel: "Simulation Results" },
  { number: 3, label: "Next Steps", sublabel: "Action Plan" },
];

interface WizardHeaderProps {
  currentStep: 1 | 2 | 3;
  simulationName?: string;
}

export function WizardHeader({ currentStep, simulationName }: WizardHeaderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-t-4 border-t-blue-400 border-gray-200 mb-4">
      <div className="p-6 flex items-center justify-between border-b border-gray-100">
        <div>
          <h1 className="text-xl font-bold text-blue-500">
            Center Operations Simulator
          </h1>
          <p className="text-sm text-gray-500">
            {currentStep === 1
              ? "Simulate cash flow, budgeting, staffing, and financial events"
              : currentStep === 2
              ? "Simulation Results & Key Performance Indicators"
              : "Personalized Action Plan"}
          </p>
        </div>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {currentStep}
        </div>
      </div>

      <div className="px-8 py-5">
        <div className="flex items-center">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex items-center flex-1">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors",
                    step.number < currentStep
                      ? "bg-blue-500 text-white"
                      : step.number === currentStep
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-500"
                  )}
                >
                  {step.number < currentStep ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    step.number
                  )}
                </div>
                <div>
                  <p
                    className={cn(
                      "text-sm font-medium",
                      step.number === currentStep
                        ? "text-gray-900"
                        : "text-gray-400"
                    )}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-400">{step.sublabel}</p>
                </div>
              </div>
              {idx < STEPS.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-px mx-4",
                    step.number < currentStep ? "bg-blue-300" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}