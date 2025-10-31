"use client"

import { useState } from "react"
import Header from "@/components/header"
import ProblemStatement from "@/components/problem-statement"

const problemStatements = [
  {
    id: 1,
    title: "Open Innovation Challenge: Next-Gen VLSI Design Concepts",
    statement: `Open problem statements related to the VLSI domain are welcome. Participants are encouraged to propose innovative, technically sound, and practically feasible ideas that push the boundaries of modern chip design. Submissions may focus on power optimization, interconnect modeling, timing closure, physical design automation, analog/mixed-signal circuit innovation, or emerging device architectures. The goal is to showcase originality, solid engineering reasoning, and effective validation.`,
    scoring: [
      {
        category: "Originality and Innovation",
        points: 30,
        description: "Novel problem framing or unconventional approach in VLSI context",
      },
      {
        category: "Technical Depth",
        points: 25,
        description: "Demonstrated understanding of VLSI fundamentals and design constraints",
      },
      {
        category: "Feasibility and Implementation Plan",
        points: 20,
        description: "Realistic approach with clear tool usage, methodology, or simulation plan",
      },
      {
        category: "Creativity and Presentation",
        points: 15,
        description: "Quality of documentation, design clarity, and visualization of results",
      },
      {
        category: "Impact Potential",
        points: 10,
        description: "Potential to influence low-power design, automation, or scalability aspects",
      },
    ],
  },
  {
    id: 2,
    title: "ASIC-Based Accelerator for High-Speed Quantitative Algorithms",
    statement: `High-speed quantitative computations, often used in finance and analytics, require efficient hardware acceleration to meet demanding latency and throughput requirements. CPUs offer flexibility but are generally constrained by sequential processing and memory bottlenecks. This project proposes the design of a simple ASIC accelerator architecture capable of performing basic quantitative algorithms with low latency and improved throughput. The ASIC will incorporate pipelined hardware blocks for operations like moving average, variance, and small matrix multiplication, using fixed-point arithmetic for efficiency. The scope is limited to architectural design, RTL modeling, and simulation, demonstrating key ASIC design principles within a short development timeframe.`,
    objectives: [
      "Architect a modular ASIC design with separate pipelined units for the selected algorithms",
      "Employ fixed-point datapaths to balance numerical accuracy and hardware simplicity",
      "Develop memory buffers using simple register arrays or small RAM blocks for streaming data",
      "Provide a hardware controller to select and switch between algorithmic modules dynamically",
      "Simulate the design to validate functional correctness and latency benchmarks",
    ],
    functionalRequirements: [
      "ASIC modules for: Moving Average (e.g., sliding window over data stream), Variance Calculation, Matrix Multiplication (e.g., 4x4 fixed-point multiply-accumulate array)",
      "Pipeline stages to enable concurrent operation and minimal cycle latency",
      "FIFO or register-based buffers to handle input and output streaming",
      "Simple control logic to select active module and manage data flow",
      "Interfaces for external input/output data (modeled as input/output ports)",
    ],
    nonFunctionalRequirements: [
      "Target fixed-point arithmetic with bit widths designed for accuracy and synthesis feasibility",
      "Latency: Target minimal pipeline stages to keep response fast (example ≤10 cycles)",
      "Synthesizable RTL code (Verilog or VHDL) suitable for basic ASIC flow simulation",
      "Focused scope to enable design, coding, and simulation within ~9 hours",
      "Report describing architecture, module interfaces, pipeline design, and simulation results",
    ],
    methodology: [
      "Data Input and Buffering: Data samples arrive at input registers or FIFO buffers",
      "Pipelined Computation Units: Each algorithm implemented as a pipelined datapath with fixed-point adders, multipliers, and accumulators. Moving average uses sliding window sum; variance uses incremental formula; matrix multiply uses multiply-accumulate array",
      "Control Logic: Finite state machine or simple selector to route inputs and outputs to the currently active module",
      "Output Stage: Computed results stored in output registers or buffers, available for system readout",
      "Simulation and Validation: Cycle-accurate simulation to verify functionality, timing, and latency. Compare results to expected values from software models",
    ],
    scoring: [
      {
        category: "Design Completeness",
        points: 30,
        description: "Correct RTL modules for all required algorithms with pipelining",
      },
      {
        category: "Functional Accuracy",
        points: 25,
        description: "Matching output values with software reference for target inputs",
      },
      {
        category: "Pipeline and Latency Efficiency",
        points: 20,
        description: "Well-structured pipeline with minimal cycle latency",
      },
      { category: "Control Logic Implementation", points: 15, description: "Effective dynamic switching and control" },
      {
        category: "Documentation Quality",
        points: 10,
        description: "Clear architecture explanation and simulation results presentation",
      },
    ],
  },
  {
    id: 3,
    title: "Intelligent Cell Placement Optimization in VLSI Physical Design",
    statement: `The goal of this project is to develop a software program that performs intelligent cell placement for a digital VLSI circuit. The program should determine the optimal layout of standard cells on a defined chip area to minimize total area and interconnection wirelength while preventing cell overlaps. The project should capture the essence of the physical design stage in chip implementation, focusing on efficient spatial placement and logical grouping of connected cells. The objective is to demonstrate a compact, optimized layout that maintains good area utilization and short interconnect distances.`,
    objectives: [
      "Develop optimal cell placement algorithm for VLSI circuits",
      "Minimize total area and interconnection wirelength",
      "Prevent cell overlaps and maintain chip boundaries",
      "Demonstrate compact, optimized layouts with good area utilization",
    ],
    functionalRequirements: [
      "List of standard cells with attributes: Cell dimensions (width, height), Pin coordinates or connection points, List of logical connections (netlist)",
      "Final placement coordinates (x, y) of each cell inside the chip area",
      "Calculated total chip area used and area utilization ratio",
      "Estimated wirelength between connected cells",
    ],
    nonFunctionalRequirements: [
      "No overlaps between cells",
      "All cells must lie within the defined chip boundary",
      "Connected cells should be placed near each other to minimize wirelength",
      "Should scale reasonably for small to medium test cases (up to around 2000 cells)",
      "Practical algorithmic approaches: Simulated Annealing, Greedy or Iterative Refinement, Partitioning or Force-directed Placement, Simple Hybrid or Randomized Optimization",
    ],
    methodology: [
      "Implement placement algorithm using Python, C++, or any language",
      "Focus on correct functionality and measurable improvement in placement quality",
      "Test with benchmark circuits of varying sizes",
    ],
    scoring: [
      {
        category: "Functional Correctness",
        points: 20,
        description: "Input handling, valid placement, and output generation",
      },
      { category: "Placement Quality", points: 25, description: "Wirelength reduction and area efficiency" },
      { category: "Algorithm Efficiency", points: 20, description: "Execution speed and resource use" },
      { category: "Constraint Handling", points: 15, description: "Placement validity and rule satisfaction" },
      { category: "Documentation & Explanation", points: 10, description: "Report clarity and readability" },
      { category: "Bonus: Visualization", points: 10, description: "Visualization or timing/power consideration" },
    ],
  },
  {
    id: 4,
    title: "High-Speed 16-bit Arithmetic Logic Unit (ALU) Optimization for Area and Delay",
    statement: `Design and implement a 16-bit Arithmetic Logic Unit (ALU) that efficiently balances computation speed and silicon area. The ALU must perform fundamental arithmetic and logical operations while being optimized for minimal propagation delay and reduced resource utilization. Participants should explore architectural, logic-level, and synthesis optimizations that achieve the best area-delay product without sacrificing functionality or correctness. The challenge lies in the trade-off between minimizing critical path delay and conserving logic resources. Designers are encouraged to apply advanced adder topologies, hybrid logic reduction techniques, or synthesis optimizations to enhance performance.`,
    objectives: [
      "Design 16-bit ALU with optimized area-delay product",
      "Support fundamental arithmetic and logical operations",
      "Explore architectural and synthesis optimizations",
      "Demonstrate measurable improvements in delay and area metrics",
    ],
    functionalRequirements: [
      "Design Language: Verilog HDL",
      "Supported Operations: ADD, SUB, AND, OR, XOR, SLT (Set Less Than), SHIFT (left and right)",
      "Architecture Variants: At least two adder architectures must be compared (e.g., ripple-carry vs. carry-lookahead, or carry-select)",
      "Optimization Target: Minimize both the critical path delay and total logic cell utilization",
      "Verification: Functional correctness verified through simulation (testbench required)",
    ],
    nonFunctionalRequirements: [
      "Synthesis Targets: FPGA or ASIC synthesis reports demonstrating: Area utilization, Timing performance (worst negative slack, setup delay, etc.)",
      "Comparative discussion on architectural efficiency",
      "Area-delay product evaluation",
      "Optional: Estimate power consumption using synthesis tools (bonus metric)",
    ],
    methodology: [
      "Implement multiple ALU architectures with different adder topologies",
      "Use Verilog HDL for RTL design",
      "Perform synthesis analysis with timing and area reports",
      "Compare architectures and document findings",
    ],
    scoring: [
      {
        category: "Functional Correctness",
        points: 20,
        description: "All operations produce accurate results under varied test cases",
      },
      {
        category: "Optimization Effectiveness",
        points: 25,
        description: "Demonstrated reduction in propagation delay or area versus baseline design",
      },
      {
        category: "Design Efficiency",
        points: 15,
        description: "Quality of coding style, parameterization, and hardware resource usage",
      },
      {
        category: "Comparative Analysis",
        points: 15,
        description: "Clarity and depth in comparing at least two ALU architectures",
      },
      {
        category: "Timing and Synthesis Results",
        points: 15,
        description: "Quality and interpretability of synthesis reports, timing slack, and logic utilization",
      },
      {
        category: "Bonus: Power Analysis",
        points: 10,
        description: "Estimated power consumption and reasoning on energy-performance trade-off",
      },
    ],
  },
  {
    id: 5,
    title: "Custom Communication protocol and PCU implementation to I²C and SPI",
    statement: `Legacy serial communication protocols like SPI and I²C are widely used but have inherent limitations: SPI's high speed comes at the cost of extra wiring and lack of multi-master arbitration, while I²C's two-wire simplicity limits throughput and adds arbitration complexity. This project aims to design a new serial communication protocol (NCP) that combines the best features of both SPI and I²C — offering flexible multi-device support, simplified wiring, configurable speeds, and robust error management. Additionally, a Protocol Conversion Unit (PCU) must be developed in Verilog to enable seamless interoperability between SPI, I²C devices, and this new NCP.`,
    objectives: [
      "Design new communication protocol combining SPI and I²C strengths",
      "Develop Protocol Conversion Unit (PCU) in Verilog",
      "Enable seamless interoperability between protocols",
      "Support multi-master and error handling",
    ],
    functionalRequirements: [
      "New Communication Protocol (NCP) Design: Define physical and data link layers, Include multi-master support with arbitration or collision detection, Enable full-duplex transfer capability, Specify data rates (target ≥ 5 Mbps)",
      "Protocol Conversion Unit (PCU) Implementation: Develop modular Verilog PCU connecting SPI, I²C, and NCP interfaces, Implement logic to convert data, clock, and control signals bidirectionally, Handle clock domain crossings and buffering",
      "Support configuration registers for modes, clock speed, and error handling policies",
    ],
    nonFunctionalRequirements: [
      "Achieve end-to-end latency per transaction ≤ 15 clock cycles on the PCU",
      "Operate reliably with SPI clock frequencies up to 10 MHz, I²C standard and fast modes, and NCP up to 5 Mbps",
      "Use ≤ 10k LUTs or equivalent FPGA logic resources (estimation based on synthesis)",
    ],
    methodology: [
      "Define NCP protocol specification with timing diagrams",
      "Implement PCU in Verilog with modular design",
      "Create comprehensive testbenches for all scenarios",
      "Verify with simulation and provide detailed documentation",
    ],
    scoring: [
      {
        category: "Originality and Completeness of NCP Design",
        points: 25,
        description: "Creativity in protocol definition combining SPI and I²C strengths",
      },
      {
        category: "Conversion Logic Accuracy and Robustness",
        points: 25,
        description: "Correctness of translation between protocols, error detection/handling",
      },
      {
        category: "Verilog Implementation Quality",
        points: 20,
        description: "Modular, clean code, effective clock domain crossing, resource utilization",
      },
      {
        category: "Verification and Testing Thoroughness",
        points: 20,
        description: "Coverage of real-life scenarios, handling arbitration, error conditions",
      },
      {
        category: "Documentation and Clarity",
        points: 10,
        description: "Clear protocol specs, diagrams, and explanation of implementation",
      },
    ],
  },
  {
    id: 6,
    title: "Adaptive Multi-Level Cache Design for Reducing Memory Access Latency",
    statement: `Modern processors often face performance bottlenecks due to the widening speed gap between CPU cores and DRAM memory. Despite the use of multi-level cache hierarchies, traditional cache designs frequently fail to sustain CPU throughput during high-intensity memory workloads. These stalls degrade overall computational efficiency and underutilize processing pipelines. The challenge is to design and prototype an innovative, non-traditional cache architecture that reduces access latency and improves hit rates through solutions like victim cache integration, stream buffers, or adaptive approaches.`,
    objectives: [
      "Design innovative non-traditional cache architecture",
      "Reduce access latency and improve hit rates",
      "Demonstrate measurable improvement over baseline",
      "Implement adaptive or hybrid caching strategies",
    ],
    functionalRequirements: [
      "Implement simplified memory hierarchy: CPU core (can be abstracted), L1 and L2 (or unified) cache modules, Main memory access model (with fixed latency)",
      "Introduce additional mechanism: victim cache, stream buffer, or adaptive strategy",
      "Support configurable cache size, associativity, and replacement policy",
      "Instrument design to record: Cache hit rate, Average memory access time (AMAT), Miss penalty or stall cycles",
    ],
    nonFunctionalRequirements: [
      "Provide testbench to compare baseline and improved architectures under same workload traces",
      "Optional (for advanced credit): Implement adaptive switching based on dynamic runtime statistics",
      "Document design decisions and provide brief performance analysis",
    ],
    methodology: [
      "Design cache architecture with enhanced features",
      "Implement in preferred language with modular structure",
      "Create test harness for performance evaluation",
      "Compare against baseline traditional cache model",
    ],
    scoring: [
      {
        category: "Cache Architecture Design",
        points: 30,
        description: "Implementation clarity, modularity, correctness",
      },
      { category: "Novel Enhancement Mechanism", points: 30, description: "Originality and practical feasibility" },
      {
        category: "Performance Evaluation",
        points: 25,
        description: "Hit rate, AMAT improvement, and analysis accuracy",
      },
      { category: "Code Quality and Documentation", points: 15, description: "Comments, parameterization, clarity" },
    ],
  },
  {
    id: 7,
    title: "Low-Power Sensor Interface and Preprocessing Pipeline for AI Wearables",
    statement: `Modern wearable devices rely on continuous sensing of physiological or motion data to drive intelligent features such as activity recognition or health monitoring. These sensors produce high-frequency data streams that consume significant bandwidth and power when transmitted or processed directly by an AI core. Your task is to design a low-power sensor interface and preprocessing pipeline that efficiently collects simulated sensor data, performs lightweight signal conditioning, and outputs a compact feature vector suitable for an on-device AI model. The system must operate at a realistic sensor rate and compress data by approximately 90%.`,
    objectives: [
      "Design low-power sensor interface and preprocessing pipeline",
      "Achieve ~90% data compression",
      "Extract key features for AI model input",
      "Demonstrate energy-efficient operations",
    ],
    functionalRequirements: [
      "Implement RTL or pseudo-RTL block diagram: sensor input → filter/feature extraction → feature vector output",
      "Use fixed-point arithmetic across modules to reduce area and dynamic power",
      "Support realistic sampling rates: 50 Hz (heart-rate, temperature), 100–500 Hz (accelerometer, gyroscope)",
      "Demonstrate filtering (FIR/IIR, moving average, decimation) or feature computation (RMS, variance, peak detection)",
    ],
    nonFunctionalRequirements: [
      "Implement duty-cycling or clock gating to mimic low-power operation",
      "Create testbench generating synthetic or recorded sensor waveforms",
      "Log processed output for comparison and size reduction percentage",
      "Deliver report explaining system architecture, trade-offs, and quantitative results",
    ],
    methodology: [
      "Design preprocessing pipeline with modular blocks",
      "Implement in RTL or pseudo-RTL with fixed-point arithmetic",
      "Create realistic sensor data testbench",
      "Measure compression ratio and power efficiency",
    ],
    scoring: [
      {
        category: "Functional Correctness",
        points: 25,
        description: "Preprocessing operations work correctly; output vector correctness verified",
      },
      {
        category: "Design Efficiency",
        points: 20,
        description: "Use of fixed-point arithmetic, shared computational blocks, clock gating",
      },
      {
        category: "Data Reduction Accuracy",
        points: 20,
        description: "Achieved compression ratio close to or better than 10:1 with minimal loss",
      },
      {
        category: "Code Quality & Modularity",
        points: 10,
        description: "Clear module-level organization, naming, comments, parameterization",
      },
      {
        category: "Demonstration & Testbench Quality",
        points: 15,
        description: "Testbench covers realistic data patterns and visual/log outputs validate",
      },
      {
        category: "Report & Design Justification",
        points: 10,
        description: "Clarity in explaining trade-offs, resource sharing, energy-awareness",
      },
    ],
  },
  {
    id: 8,
    title: "Metastability-Hardened Clock Domain Crossing Synchronizer Design and Evaluation",
    statement: `In modern SoC and multi-clock digital systems, reliable communication across asynchronous clock domains is critical. A common approach involves using flip-flop-based synchronizers to reduce the chance of metastability-induced failures. However, conventional two-flop synchronizers may not always provide the optimal balance between reliability, latency, and area. The objective of this project is to design, simulate, and analyze a metastability-hardened synchronizer capable of safely transferring a single-bit control signal between two asynchronous clock domains.`,
    objectives: [
      "Design metastability-hardened synchronizers",
      "Compare two-flop and three-flop architectures",
      "Observe metastable behavior under realistic conditions",
      "Measure MTTF improvement and trade-offs",
    ],
    functionalRequirements: [
      "Design and simulate at least two synchronizer architectures: Two-flip-flop synchronizer, Three-flip-flop synchronizer (extended version)",
      "Each synchronizer implemented at transistor level using LTspice or similar analog circuit simulation",
      "Apply asynchronous clock signals with controlled skew and jitter",
      "Introduce metastability deliberately by aligning input transition times close to receiving clock edge",
    ],
    nonFunctionalRequirements: [
      "Measure metastability resolution time, probability of failure, effective latency, area, and power consumption",
      "Present all test results in technical report with simulation waveforms",
      "Show metastability conditions and recovery behavior",
    ],
    methodology: [
      "Implement flip-flop synchronizers at transistor level",
      "Create test scenarios with asynchronous clocks",
      "Deliberately trigger metastability for measurement",
      "Compare architectures across multiple metrics",
    ],
    scoring: [
      {
        category: "Circuit Design Quality",
        points: 25,
        description: "Correct, transistor-level implementation with clear, justified choices",
      },
      {
        category: "Simulation Setup and Rigor",
        points: 20,
        description: "Effective testbench design demonstrating asynchronous clock conditions",
      },
      {
        category: "Data Measurement and Analysis",
        points: 20,
        description: "Accurate timing, voltage, and probability measurements; clear comparison",
      },
      {
        category: "Discussion and Technical Insight",
        points: 20,
        description: "Logical interpretation of results, explanation of metastability improvement",
      },
      {
        category: "Documentation and Presentation",
        points: 15,
        description: "Well-structured report with circuit schematics and timing waveforms",
      },
    ],
  },
  {
    id: 9,
    title: "High-Speed, Low-Power Shift Register Using Pass-Transistor Logic",
    statement: `Shift registers are fundamental building blocks in serial communication, digital signal processing, and memory architectures. However, conventional D flip-flop–based shift registers suffer from high area occupancy and power dissipation when scaled for high-speed applications. The objective of this problem is to design an optimized shift register that minimizes area and power while maintaining high operational speed using transmission gate or complementary pass-transistor logic combined with power-reduction methods.`,
    objectives: [
      "Design optimized shift register with reduced area and power",
      "Maintain high operational speed",
      "Use pass-transistor or transmission gate logic",
      "Demonstrate measurable improvements over baseline",
    ],
    functionalRequirements: [
      "Implement at least two 4-bit shift register architectures: Conventional CMOS D flip-flop–based design (baseline), Optimized design using transmission gates or pass-transistor logic",
      "Simulate both circuits at transistor level using LTspice or similar circuit simulator",
      "Use appropriate transistor models (CMOS 180 nm or higher node)",
    ],
    nonFunctionalRequirements: [
      "Measure propagation delay, power consumption (average and peak), and transistor count",
      "Investigate impact of bit-width scaling (4-bit vs. 8-bit)",
      "Introduce clock gating or data gating to reduce switching power",
      "Optionally explore pipelined operation for high-speed design",
    ],
    methodology: [
      "Design both conventional and optimized architectures",
      "Simulate at transistor level with realistic parameters",
      "Measure performance across multiple metrics",
      "Document design choices and improvements",
    ],
    scoring: [
      {
        category: "Design Innovation",
        points: 25,
        description: "Effective use of alternative logic styles (TG/PTL) and optimization techniques",
      },
      {
        category: "Simulation Quality",
        points: 25,
        description: "Correct and functional LTspice simulation with proper waveform validation",
      },
      {
        category: "Performance Metrics",
        points: 25,
        description: "Quantified improvement in area and power over baseline design",
      },
      {
        category: "Documentation and Presentation",
        points: 25,
        description: "Clarity of schematic diagrams and organized report with comparisons",
      },
    ],
  },
  {
    id: 10,
    title: "AI-Driven Congestion-Aware Global Placement Optimization for Large-Scale VLSI Designs",
    statement: `As integrated circuits grow in complexity, efficient placement algorithms are critical to ensure optimal chip performance, power, and routability. Congestion during global placement directly affects wirelength, delay, and manufacturability. Traditional placement algorithms often trade accuracy for computational speed and fail to dynamically adapt to localized congestion. The goal of this problem is to design and evaluate an AI-driven congestion-aware global placement algorithm that intelligently predicts and mitigates routing congestion.`,
    objectives: [
      "Design AI-driven congestion-aware placement algorithm",
      "Predict and mitigate routing congestion",
      "Minimize wire density variations",
      "Demonstrate improvement over baseline heuristics",
    ],
    functionalRequirements: [
      "Implement simplified chip placement setup representing standard cells, net connections, and spatial coordinates",
      "Develop congestion estimation function (e.g., bin-based density counting or probabilistic routing overlap)",
      "Design AI-guided placement optimization loop predicting congestion and adjusting cell positions",
      "Compare AI-driven placement against classical baseline (greedy spreading or simulated annealing)",
    ],
    nonFunctionalRequirements: [
      "Output relevant metrics: wirelength, congestion score, displacement, runtime",
      "Provide visualizations (plots or heatmaps) showing pre/post-optimization congestion",
      "Test on small-to-medium benchmark circuits (~10K–50K cells)",
      "Optional: Integrate timing/power estimation or reinforcement learning",
    ],
    methodology: [
      "Implement placement algorithm with congestion awareness",
      "Integrate AI/ML for congestion prediction",
      "Compare against baseline algorithms",
      "Visualize and analyze results",
    ],
    scoring: [
      {
        category: "Functional Implementation",
        points: 20,
        description: "Correct parsing, placement legality, connectivity maintenance",
      },
      {
        category: "Congestion Mitigation Performance",
        points: 25,
        description: "Reduction in congestion metrics versus baseline",
      },
      {
        category: "Optimization Quality",
        points: 15,
        description: "Balance between wirelength minimization and spread uniformity",
      },
      {
        category: "AI or Heuristic Integration",
        points: 15,
        description: "Creativity and correctness in AI involvement",
      },
      {
        category: "Runtime & Efficiency",
        points: 10,
        description: "Algorithm completes efficiently on given test cases",
      },
      {
        category: "Visualization & Reporting",
        points: 10,
        description: "Clarity of result plots, observations, interpretation",
      },
      {
        category: "Presentation & Code Structure",
        points: 5,
        description: "Readability, organization, commenting of code",
      },
    ],
  },
  {
    id: 11,
    title: "Low-Power Adaptive Clocking for Portable Systems",
    statement: `Clock networks are often among the most power-intensive subsystems in digital circuits, contributing significantly to dynamic energy consumption. Portable and battery-driven systems demand adaptive solutions that minimize unnecessary toggles or dynamically adjust frequency without losing synchronization or timing reliability. Participants will design a Low-Power Adaptive Clocking Unit using either Clock Gating Controller (safe, glitch-free mechanism) or Voltage-Controlled Oscillator (frequency adaptation).`,
    objectives: [
      "Design low-power adaptive clocking unit",
      "Minimize clock network power consumption",
      "Implement safe clock gating or frequency adaptation",
      "Demonstrate power reduction and reliability",
    ],
    functionalRequirements: [
      "For Clock Gating: RTL-level design implementing safe clock enable/disable logic, Integration with small datapath (4-bit ALU or register file), Glitch-free switching with internal latch mechanisms",
      "For VCO: Transistor-level model using Ngspice/LTspice, Demonstration of frequency variation with control voltage, Well-commented schematic or model file",
    ],
    nonFunctionalRequirements: [
      "Simulation results comparing switching activity and clock enable control behavior",
      "Optional simple activity monitor to detect idle periods automatically",
      "2–3 page technical report covering operating modes and transition conditions",
      "Show reduced dynamic activity or adaptive frequency with annotated waveforms",
    ],
    methodology: [
      "Choose clock gating or VCO design approach",
      "Implement design with appropriate tools",
      "Create comprehensive testbenches",
      "Measure and document power improvements",
    ],
    scoring: [
      {
        category: "Functional Correctness",
        points: 25,
        description: "Accurate clock or oscillation behavior with expected transitions",
      },
      {
        category: "Power Efficiency Demonstration",
        points: 25,
        description: "Clear simulation showing power reduction or adaptive scaling",
      },
      {
        category: "Reliability and Safety",
        points: 20,
        description: "Glitch-free operation, stable transitions, proper synchronization",
      },
      {
        category: "Design Clarity",
        points: 15,
        description: "Quality of code/schematic, clarity of control strategy, documentation",
      },
      {
        category: "Report Quality",
        points: 15,
        description: "Coherence, explanation of trade-offs, effective visualization of results",
      },
    ],
  },
  {
  id: 12,
  title: "Hardware-Only Fault Detection Node for Industrial Machinery",
  statement: `Design and build a robust hardware-only system to detect abnormal vibrations, temperature spikes, and current overloads in an industrial machine. The system must operate autonomously and trigger immediate visual, audible, and relay-based alerts upon detecting faulty machine states, entirely without microcontroller involvement. It should be low-cost, scalable across multiple machines, and demonstrate continuous operation under simulated industrial scenarios.`,
  objectives: [
    "Detect abnormal machine behavior using vibration, temperature, and current sensors",
    "Ensure instant hardware-only fault alerts without microcontrollers",
    "Maintain low-cost, scalable design with reliable operation",
  ],
  functionalRequirements: [
    "Interface with vibration (piezo/MEMS), temperature (LM35/thermistor), and current (ACS712/shunt) sensors",
    "Amplify and condition sensor outputs using op-amps and filters",
    "Use comparators for threshold detection with adjustable setpoints",
    "Implement logic (AND/OR/majority-vote) for fault state decisions",
    "Provide LED, buzzer, and relay outputs for fault alerts",
    "Operate from 5–12V supply for at least 30 minutes continuously",
    "Demonstrate operation on a motor/fan load with simulated faults",
    "Prepare schematic and demonstrate threshold calibration",
  ],
  nonFunctionalRequirements: [
    "Total cost ≤ ₹1000 per node",
    "Hardware-only response without computation delay",
    "Robust continuous operation with minimal false triggers",
    "Clear, modular wiring and schematic documentation",
  ],
  methodology: [
    "Integrate and calibrate three sensors",
    "Design amplification, conditioning, and comparator stages",
    "Implement logic-based fault detection and output control",
    "Test fault response latency and demonstrate robustness",
  ],
  scoring: [
    { category: "Sensor Integration and Calibration", points: 15, description: "Accurate and stable sensor readings with proper calibration" },
    { category: "Signal Conditioning Circuitry", points: 15, description: "Effective amplification and filtering for clear detection" },
    { category: "Fault Detection Logic Design", points: 20, description: "Reliable comparator and logic-based fault identification" },
    { category: "Alert/Relay Functionality", points: 15, description: "Instant visual, audible, and relay fault alerts" },
    { category: "Detection Latency (<10 ms)", points: 10, description: "Fast fault response without delay" },
    { category: "Cost Control (<₹1000/Node)", points: 5, description: "Adherence to cost constraint while maintaining performance" },
    { category: "Robustness/Durability", points: 10, description: "Stable continuous operation under varying load" },
    { category: "Schematic Clarity and Documentation", points: 10, description: "Well-documented design and clear schematic layout" },
  ],
},

{
  id: 13,
  title: "Fast Maze Routing Using Optimized Pathfinding Algorithms",
  statement: `Modern routing systems must efficiently find shortest paths in complex environments, such as VLSI interconnect routing, robot navigation, or network routing. Traditional solutions like the Lee algorithm ensure shortest-path correctness but are computationally expensive. Participants must design and implement an optimized pathfinding algorithm that finds the shortest valid route faster than Lee’s algorithm while maintaining correctness. The algorithm should support dynamic obstacle updates and scalability in large grids, ideally incorporating novel heuristic or hybrid methods.`,
  objectives: [
    "Develop an optimized pathfinding algorithm with improved runtime",
    "Ensure correctness equivalent to the Lee algorithm",
    "Support dynamic maze updates and scalability for large grids",
  ],
  functionalRequirements: [
    "Represent maze as 2D grid (0=traversable, 1=obstacle)",
    "Input grid size, start, and destination coordinates",
    "Handle obstacle detection and unreachable destinations",
    "Output path sequence and cost (steps/distance)",
    "Measure runtime or node expansions for efficiency",
    "Support dynamic obstacle updates (optional bonus)",
  ],
  nonFunctionalRequirements: [
    "Code should be modular, readable, and well-documented",
    "Allow implementation in any high-level language (C/C++/Python/Java)",
    "Optional visualization of pathfinding progress",
  ],
  methodology: [
    "Implement baseline Lee algorithm for comparison",
    "Develop optimized algorithm using A*, Bidirectional BFS, or Jump Point Search",
    "Validate correctness, performance, and scalability",
    "Document algorithm trade-offs and improvements",
  ],
  scoring: [
    { category: "Algorithm Explanation", points: 20, description: "Clear explanation of algorithm, justification, and correctness proof" },
    { category: "Optimization Techniques", points: 20, description: "Implementation of heuristics or bidirectional strategies" },
    { category: "Obstacle & Dynamic Handling", points: 15, description: "Proper handling of obstacles and dynamic updates" },
    { category: "Implementation & Accuracy", points: 25, description: "Functional correctness and valid path generation" },
    { category: "Efficiency & Scalability", points: 10, description: "Runtime improvement over standard Lee algorithm" },
    { category: "Documentation & Presentation", points: 10, description: "Neat, structured write-up with performance insights" },
  ],
},

{
  id: 14,
  title: "Configurable, Power-Efficient LFSR for Cryptographic and Embedded Applications",
  statement: `Design a configurable and power-optimized Linear Feedback Shift Register (LFSR) in Verilog supporting flexible configuration parameters such as seed, polynomial taps, and variable register lengths (e.g., 8, 16, 32 bits). The design should allow runtime reconfiguration and demonstrate reduced power consumption through gating or adaptive clock control.`,
  objectives: [
    "Implement a configurable Verilog LFSR with variable lengths",
    "Enable runtime reconfiguration of seed and tap positions",
    "Optimize switching activity for reduced power consumption",
  ],
  functionalRequirements: [
    "Variable register length selectable among multiple bit-widths",
    "Programmable seed and tap positions for dynamic reconfiguration",
    "Control signals for reset, reseed, and enable/disable operations",
    "Demonstrate lower power versus baseline design via simulation",
    "Provide synthesis/simulation reports showing delay and resource use",
  ],
  nonFunctionalRequirements: [
    "Clean, parameterized and modular Verilog code",
    "Comprehensive verification with testbenches and waveform analysis",
    "Readable documentation summarizing results and trade-offs",
  ],
  methodology: [
    "Design modular LFSR architecture with configurable taps",
    "Integrate gating or clock enable for power optimization",
    "Simulate and compare against non-gated LFSR",
    "Document results and verify correct pseudo-random sequences",
  ],
  scoring: [
    { category: "Functional Correctness", points: 30, description: "Accurate LFSR sequence generation across lengths and taps" },
    { category: "Configurability", points: 20, description: "Seamless runtime tap/seed reconfiguration" },
    { category: "Power Optimization", points: 20, description: "Demonstrated reduction in switching activity" },
    { category: "Design Efficiency", points: 15, description: "Clean, modular, and parameterized Verilog design" },
    { category: "Verification and Analysis", points: 15, description: "Thorough simulation and waveform-based validation" },
  ],
},

{
  id: 15,
  title: "Transistor-Level Design and Simulation of a Custom Bitwise Manipulation Unit in LTspice",
  statement: `Design a transistor-level CMOS-based Custom Bitwise Manipulation Unit (CBMU) in LTspice supporting multiple bitwise operations (AND, OR, XOR, NOT, NAND, NOR, XNOR, shift, rotate, and mask) for data widths greater than 8 bits. The circuit must include a control unit selecting among operations and demonstrate functionality, delay, and power metrics via transient simulations.`,
  objectives: [
    "Implement transistor-level logic gates for bitwise operations",
    "Combine operations into a multi-function manipulation unit",
    "Perform LTspice simulations to analyze delay and power",
  ],
  functionalRequirements: [
    "CMOS implementation of AND, OR, XOR, NOT, NAND, NOR, XNOR gates",
    "Implement 1-bit logical shifts and rotations for multi-bit inputs",
    "Include mask-based selective bit output control",
    "3-bit selector input to choose among nine operations",
    "Simulate all operations for 12- or 16-bit data widths",
    "Generate transient plots showing input/output behavior",
  ],
  nonFunctionalRequirements: [
    "Efficient transistor usage and schematic clarity",
    "Comprehensive transient simulation coverage",
    "Properly annotated schematics and waveform documentation",
  ],
  methodology: [
    "Design transistor-level gates and integrate into CBMU",
    "Implement control logic and vector I/O structure",
    "Perform transient simulations for multiple input patterns",
    "Analyze and report delay, power, and circuit efficiency",
  ],
  scoring: [
    { category: "Transistor-Level Functionality", points: 30, description: "All 9 bitwise operations correctly implemented" },
    { category: "CMOS Gate Design", points: 20, description: "Accurate and optimized transistor-level gate implementations" },
    { category: "Simulation & Test Coverage", points: 20, description: "Comprehensive LTspice test coverage for all operations" },
    { category: "Delay and Power Metrics", points: 15, description: "Measured timing and power performance from simulations" },
    { category: "Circuit Simplicity", points: 10, description: "Efficient transistor count and clean schematic layout" },
    { category: "Documentation & Reporting", points: 5, description: "Clear annotations and simulation summaries" },
  ],
},

{
  id: 16,
  title: "Smart Home Hardwired Sensor Fusion Control Logic in LTSpice",
  statement: `Design a fully hardwired analog-digital mixed-signal control circuit in LTSpice that performs sensor fusion for smart home applications using multiple sensors (e.g., temperature, light, motion) to make real-time control decisions. The design must exclude microcontrollers and rely solely on analog comparators, logic gates, and passive components for decision-making.`,
  objectives: [
    "Implement mixed-signal sensor fusion without microcontrollers",
    "Integrate at least three different sensors and fuse their outputs",
    "Simulate accurate, real-time decision control in LTspice",
  ],
  functionalRequirements: [
    "Include at least one analog (thermistor/LDR) and one digital (motion/switch) sensor",
    "Combine signals using hardwired fusion logic and comparators",
    "At least two control outputs (e.g., fan, light, buzzer)",
    "Perform LTspice transient simulation showing decision responses",
    "Explain sensor modeling and logic flow",
  ],
  nonFunctionalRequirements: [
    "Efficient power operation with minimal component count",
    "Accurate threshold-based decisions under varying sensor inputs",
    "Clear and well-documented schematic with signal labeling",
  ],
  methodology: [
    "Model and integrate analog and digital sensor circuits",
    "Design comparator and logic-based fusion decision network",
    "Simulate dynamic test cases in LTspice",
    "Evaluate delay, power, and control accuracy",
  ],
  scoring: [
    { category: "Functional Correctness", points: 30, description: "Accurate fusion and control output behavior" },
    { category: "Circuit Innovation", points: 20, description: "Novel, efficient mixed-signal hardwired design" },
    { category: "Simulation Validation", points: 20, description: "Clear LTspice waveform validation and correctness proof" },
    { category: "Circuit Efficiency", points: 15, description: "Low-power, minimal-component design efficiency" },
    { category: "Documentation & Clarity", points: 15, description: "Well-labeled schematic and design explanation" },
  ],
},
]

export default function Home() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 md:py-12">
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1">
          {problemStatements.map((problem) => (
            <ProblemStatement
              key={problem.id}
              problem={problem}
              isExpanded={expandedId === problem.id}
              onToggle={() => setExpandedId(expandedId === problem.id ? null : problem.id)}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
