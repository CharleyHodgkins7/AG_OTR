// ============================================================
// SITE DATA — Amanda J Gretsch, Inc.
// All content sourced from amandagretschot.com
// ============================================================

export const SITE = {
  name: "Amanda J Gretsch, Inc.",
  tagline: "Science-Backed Care. Personalized for You.",
  subTagline:
    "Dr. Amanda Gretsch, PhD, MS, OTR/L — 25+ years of evidence-based occupational therapy, neurofeedback, and biofeedback in Encinitas, CA.",
  phone: "760-525-3111",
  phoneHref: "tel:7605253111",
  email: "amandajaneotr@yahoo.com",
  emailHref: "mailto:amandajaneotr@yahoo.com",
  address: "543 Encinitas Blvd., Ste. 114",
  city: "Encinitas, CA 92024",
  fullAddress: "543 Encinitas Blvd., Ste. 114, Encinitas, CA 92024",
  url: "https://www.amandagretschot.com",
  social: {
    // 🚩 PLACEHOLDER: Update with real social handles
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const CREDENTIALS = [
  "PhD, Applied Psychophysiology",
  "MS, Occupational Therapy",
  "OTR/L Licensed",
  "25+ Years Experience",
  "18+ Years Private Practice",
  "1:1 Direct Care — Always",
];

export const TRUST_STRIP = [
  "PhD, Applied Psychophysiology",
  "OTR/L Licensed",
  "25+ Years Experience",
  "18+ Years Private Practice",
  "1:1 Direct Care",
  "Encinitas, CA",
  "Free 15-Min Consultation",
];

export const TESTIMONIALS = [
  {
    quote:
      "I can't say enough good things about Dr. Amanda Gretsch and the incredible impact she's had on our son. He's 10 and in 5th grade, and the progress we've seen in him both academically and socially has been amazing.",
    author: "Liz",
    condition: "Child Academic & Social Development",
  },
  {
    quote:
      "I am truly grateful for Dr. Amanda's support and guidance. Her unique approach to treating my depression and anxiety has been life changing.",
    author: "M.B.",
    condition: "Depression & Anxiety",
  },
  {
    quote:
      "Dr. Amanda's dedication and personalized approach have been instrumental in helping my daughter. We had attempted neurofeedback in the past with poor results, so we were very skeptical. The results have been transformative — my daughter is still herself but calmer, more focused, and navigating the world in a much easier way. I have been amazed at the results.",
    author: "S.A.",
    condition: "Neurofeedback",
  },
];

export const SERVICES_OVERVIEW = [
  {
    title: "Occupational Therapy",
    description:
      "Client-centered, evidence-based OT for children, teens, and adults — addressing attention, sensory processing, emotional regulation, and recovery.",
    icon: "brain",
    href: "/occupational-therapy",
  },
  {
    title: "Biofeedback & Neurofeedback",
    description:
      "Train your brain and body's physiological responses using real-time feedback. Evidence-based techniques for ADHD, anxiety, TBI, and peak performance.",
    icon: "activity",
    href: "/occupational-therapy#neurofeedback",
  },
  {
    title: "Specialized Testing",
    description:
      "QEEG brain mapping, ERP, motor skills, executive function, sensory processing, and cognitive assessments to guide personalized treatment.",
    icon: "clipboard",
    href: "/specialized-testing",
  },
  {
    title: "Treatments & Interventions",
    description:
      "15+ cutting-edge modalities including neurostimulation, sound therapies, Interactive Metronome, PEMF, ACT, CBT, and more.",
    icon: "zap",
    href: "/treatments",
  },
];

export const CONDITIONS = [
  {
    slug: "adhd",
    title: "ADHD",
    fullTitle: "Attention Deficit/Hyperactivity Disorder (ADHD)",
    summary:
      "Challenges with attention, impulse control, and regulation that affect school, work, and relationships.",
    description: `Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition characterized by challenges with attention, impulse control, and regulation of activity level. ADHD symptoms can include difficulty focusing or sustaining attention, impulsive decision-making, restlessness or excessive movement, disorganization, and challenges with time management.

ADHD affects children, teens, and adults, and its impact can vary from mild to significant, influencing performance at school, work, and in relationships. The condition is linked to differences in brain networks involved in attention, executive functioning, and self-regulation — and with the right support, individuals with ADHD can thrive.`,
    treatment:
      "Treatment may include behavioral strategies, skill-building interventions, neurofeedback (a specialized type of biofeedback), neurostimulation, occupational therapy, mindfulness practices, and collaboration with medical providers when appropriate.",
  },
  {
    slug: "anxiety",
    title: "Anxiety",
    fullTitle: "Anxiety",
    summary:
      "Excessive worry, fear, or nervousness that interferes with daily functioning, sleep, and relationships.",
    description: `Anxiety is a natural human response to stress, characterized by feelings of worry, fear, or nervousness. While occasional anxiety is a normal part of life, excessive or persistent anxiety can interfere with daily functioning, relationships, sleep, and overall well-being.

Symptoms may include restlessness, racing thoughts, muscle tension, irritability, difficulty concentrating, rapid heartbeat, and trouble sleeping. Anxiety can present in many forms — such as generalized anxiety disorder (GAD), social anxiety, panic disorder, or specific phobias — and may co-occur with ADHD, depression, or other conditions.`,
    treatment:
      "Effective support often includes skill-building interventions, mindfulness training, CBT, biofeedback, neurofeedback, neurostimulation, and lifestyle strategies to help regulate the nervous system.",
  },
  {
    slug: "asd",
    title: "Autism Spectrum Disorder",
    fullTitle: "Autism Spectrum Disorder (ASD)",
    summary:
      "A neurodevelopmental condition affecting social communication, sensory processing, and behavior patterns.",
    description: `Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by differences in social communication, sensory processing, and behavior patterns. Individuals with ASD may experience challenges with interpreting social cues, engaging in reciprocal conversation, or adapting to changes in routines.

ASD is described as a "spectrum" because it presents differently in each individual — ranging from subtle differences in social interaction to more significant support needs. Many individuals with ASD also have unique strengths, such as strong visual thinking, attention to detail, and creativity.`,
    treatment:
      "Interventions may include occupational therapy, social skills training, sensory integration therapy, executive function training, and biofeedback and neurofeedback to support self-regulation and overall functioning.",
  },
  {
    slug: "depression",
    title: "Depression",
    fullTitle: "Depression",
    summary:
      "A serious mental health condition affecting how a person feels, thinks, and functions in daily life.",
    description: `Depression is a common but serious mental health condition that affects how a person feels, thinks, and functions in daily life. It is characterized by persistent sadness, loss of interest or pleasure in activities, changes in sleep or appetite, fatigue, difficulty concentrating, and feelings of hopelessness or worthlessness.

Depression can range from mild to severe and may be triggered by life events, medical conditions, or changes in brain chemistry. It can affect individuals of all ages and often co-occurs with other concerns such as anxiety, ADHD, or neurological injuries.`,
    treatment:
      "Treatment may include evidence-based approaches such as CBT, mindfulness-based interventions, lifestyle modifications, biofeedback, neurofeedback, neurostimulation, and collaboration with medical providers when appropriate.",
  },
  {
    slug: "tbi",
    title: "Traumatic Brain Injury",
    fullTitle: "Traumatic Brain Injury (TBI) & Concussion",
    summary:
      "Brain injuries from trauma affecting thinking, memory, mood, sleep, and physical coordination.",
    description: `A Traumatic Brain Injury (TBI) is an injury to the brain caused by an external force — such as a fall, motor vehicle accident, sports injury, or blow to the head — that disrupts normal brain function. TBIs range from mild to severe and can affect thinking, memory, mood, sleep, and physical coordination.

A concussion is a mild form of TBI and is one of the most common brain injuries. Post-Concussive Syndrome (PCS) occurs when concussion symptoms last longer than expected — often weeks or months — and may include ongoing headaches, cognitive difficulties, mood changes, light or noise sensitivity, and fatigue.`,
    treatment:
      "Rehabilitation may include occupational therapy, cognitive rehabilitation, vestibular therapy, biofeedback, neurofeedback, neurostimulation, and mindfulness interventions.",
  },
  {
    slug: "sensory",
    title: "Sensory Processing Dysfunction",
    fullTitle: "Sensory Processing Dysfunction",
    summary:
      "When the brain has difficulty receiving, organizing, or responding appropriately to sensory information.",
    description: `Sensory processing dysfunctions occur when the brain has difficulty receiving, organizing, or responding appropriately to information from the senses — including sight, sound, touch, taste, smell, movement, and body awareness. These difficulties can lead to over-responsiveness (being overly sensitive), under-responsiveness (missing sensory input), or sensory-seeking behaviors.

Sensory processing dysfunctions are commonly seen in individuals with autism spectrum disorder, ADHD, anxiety, learning disabilities, and neurological injuries, but can occur in anyone.`,
    treatment:
      "Occupational therapy and sensory integration-based interventions provide structured, individualized activities that support the nervous system in processing input more effectively.",
  },
  {
    slug: "learning-disabilities",
    title: "Learning Disabilities",
    fullTitle: "Learning Disabilities",
    summary:
      "Neurologically based differences affecting how the brain processes information — not related to intelligence.",
    description: `Learning disabilities are neurologically based differences that affect how the brain receives, processes, stores, or communicates information. These difficulties are not related to intelligence but can impact skills such as reading (dyslexia), writing (dysgraphia), math (dyscalculia), listening, reasoning, and attention.

Individuals with learning disabilities may struggle with academic performance, organization, or processing speed, despite having average or above-average intelligence.`,
    treatment:
      "Assessment and targeted interventions — including occupational therapy, executive function training, cognitive skills training, biofeedback, and neurofeedback — can help individuals reach their full potential.",
  },
  {
    slug: "cognitive-decline",
    title: "Cognitive Decline",
    fullTitle: "Cognitive Decline",
    summary:
      "A gradual decrease in memory, attention, processing speed, and executive functioning.",
    description: `Cognitive decline refers to a gradual decrease in mental abilities such as memory, attention, processing speed, problem-solving, and executive functioning. It may occur as part of normal aging, or it may be related to neurological conditions, head injuries, chronic stress, or other health issues.

While some mild changes are common with age, significant or rapid decline can affect independence, confidence, and quality of life. Early intervention can slow progression, strengthen remaining abilities, and support brain health.`,
    treatment:
      "Services may include cognitive skills training, executive function training, biofeedback and neurofeedback, lifestyle and stress management strategies, and collaboration with medical providers.",
  },
  {
    slug: "executive-function",
    title: "Executive Function Difficulties",
    fullTitle: "Executive Function Difficulties",
    summary:
      "When the brain's 'management system' struggles to coordinate planning, organization, time management, and self-control.",
    description: `Executive function difficulties occur when the brain's "management system" struggles to coordinate the mental skills needed for goal-directed behavior. These skills include planning, organization, time management, working memory, emotional regulation, flexible thinking, and self-control.

Executive function difficulties are common in ADHD, autism spectrum disorder, learning disabilities, anxiety, depression, traumatic brain injuries, and neurological conditions — but can affect anyone under stress or after significant life changes.`,
    treatment:
      "Support may include skill-building interventions, environmental strategies, cognitive training, occupational therapy, executive function coaching, biofeedback, neurofeedback, and mindfulness practices.",
  },
  {
    slug: "neurological",
    title: "Neurological Disorders",
    fullTitle: "Neurological Disorders",
    summary:
      "Conditions affecting the brain, spinal cord, or nervous system — including Parkinson's, stroke, and MS.",
    description: `Neurological disorders are conditions that affect the brain, spinal cord, or nervous system, leading to changes in movement, sensation, cognition, and behavior. Examples include Parkinson's disease, Alzheimer's disease, multiple sclerosis, stroke, and other neurodegenerative or neurological conditions.

Symptoms may include tremors, muscle stiffness, balance problems, memory loss, difficulty concentrating, speech or communication challenges, and changes in mood or emotional regulation.`,
    treatment:
      "Individualized interventions may include functional skill training, cognitive rehabilitation, biofeedback and neurofeedback, sensory integration and motor coordination training, stress management, and mindfulness.",
  },
  {
    slug: "optimal-functioning",
    title: "Optimal Functioning",
    fullTitle: "Optimal Functioning & Peak Performance",
    summary:
      "Performing at your best — mentally, emotionally, and physically — even without a formal diagnosis.",
    description: `Optimal functioning refers to performing at your best — mentally, emotionally, and physically — in a way that supports success, balance, and well-being in daily life. It is not just the absence of illness or difficulty, but the ability to focus clearly, manage stress effectively, maintain emotional regulation, and engage fully in work, school, relationships, and personal goals.

Even individuals without a formal diagnosis can benefit from strategies that enhance brain efficiency, resilience, and performance.`,
    treatment:
      "Customized programs may include neurofeedback and biofeedback, cognitive skills training, executive function coaching, mindfulness, and performance optimization strategies for school, work, sports, or creative pursuits.",
  },
  {
    slug: "menopause",
    title: "Peri- & Menopausal Symptoms",
    fullTitle: "Perimenopausal and Menopausal Symptoms",
    summary:
      "Hormonal changes causing hot flashes, mood swings, brain fog, sleep disturbances, and fatigue.",
    description: `Perimenopause is the natural transition period leading up to menopause, marked by hormonal shifts that can last several years. During perimenopause and menopause, individuals may experience hot flashes, night sweats, mood swings, sleep disturbances, brain fog, fatigue, decreased concentration, anxiety, irritability, and changes in bone and cardiovascular health.

These changes can impact quality of life, relationships, work performance, and emotional well-being.`,
    treatment:
      "Individualized, evidence-based support may include stress management, biofeedback and neurofeedback, cognitive and executive function training, lifestyle strategies, and collaboration with medical providers.",
  },
];

export const TREATMENTS = [
  {
    category: "Biofeedback & Neurofeedback",
    items: [
      {
        title: "Biofeedback",
        description:
          "Evidence-based techniques that teach individuals how to gain awareness and control over physiological processes using non-invasive sensors providing real-time information about muscle activity (EMG), skin conductance (GSR), temperature, breathing patterns, and heart rate variability (HRV).",
      },
      {
        title: "Neurofeedback",
        description:
          "A specialized type of biofeedback that helps individuals train their brain's electrical activity for improved regulation and performance. We utilize amplitude training and infralow neurofeedback to support network-level regulation and stabilization of the nervous system.",
      },
      {
        title: "Heart Rate Variability Biofeedback (HRVB)",
        description:
          "Trains individuals to regulate heart rhythm patterns to improve emotional balance, stress resilience, and overall health. By learning to breathe at an optimal resonance frequency, clients increase vagal tone and support healthy brain-body communication.",
      },
    ],
  },
  {
    category: "Neurostimulation",
    items: [
      {
        title: "Audiovisual Entrainment (AVE)",
        description:
          "Uses rhythmic flashes of light and pulses of sound to gently guide the brain into specific brainwave patterns. AVE promotes relaxation, improves focus, enhances mood, and supports restorative brain states.",
      },
      {
        title: "PEMF Therapy",
        description:
          "Pulsed Electromagnetic Field (PEMF) therapy uses low-frequency electromagnetic fields to gently stimulate cellular function. Non-invasive and painless, it promotes circulation, reduces inflammation, and supports neurological and systemic recovery.",
      },
      {
        title: "tDCS & tACS",
        description:
          "Transcranial Direct Current Stimulation delivers a low-level direct current to modulate cortical excitability and support attention, mood, and cognitive performance. tACS uses rhythmic alternating currents to gently entrain brain oscillations.",
      },
      {
        title: "Dolphin Neurostim® (MPS)",
        description:
          "Microcurrent Point Stimulation applies low-frequency electrical current to specific acupuncture and trigger points. This targeted stimulation calms the nervous system, releases muscle tension, reduces pain, and promotes natural healing.",
      },
    ],
  },
  {
    category: "Sensory, Motor & Sound Therapies",
    items: [
      {
        title: "Sensory Integration Therapy",
        description:
          "Structured, individualized activities that support the nervous system in processing sensory input more effectively — improving comfort, focus, and participation in school, work, and daily life.",
      },
      {
        title: "Interactive Metronome (IM)",
        description:
          "A computer-based training program that improves timing, rhythm, and synchronization in the brain and body. IM strengthens focus, working memory, processing speed, coordination, and self-regulation.",
      },
      {
        title: "Sound Therapies",
        description:
          "Evidence-based auditory interventions including the Safe and Sound Protocol (SSP), Therapeutic Listening®, and Integrated Listening Systems (iLS) — using specifically designed music and sound patterns to influence the brain and nervous system.",
      },
    ],
  },
  {
    category: "Psychotherapy-Informed Approaches",
    items: [
      {
        title: "Acceptance and Commitment Therapy (ACT)",
        description:
          "Builds psychological flexibility — the ability to stay present, accept difficult thoughts and feelings, and take meaningful action aligned with personal values. Integrates mindfulness with behavior change strategies.",
      },
      {
        title: "Cognitive Behavioral Therapy (CBT)",
        description:
          "Helps individuals understand the connection between thoughts, emotions, and behaviors. CBT identifies unhelpful thinking patterns and builds healthier coping strategies for anxiety, depression, ADHD, trauma, and more.",
      },
      {
        title: "Zones of Regulation®",
        description:
          "A widely used framework using four color-coded zones to teach self-awareness and self-regulation. Combined with sensory integration, biofeedback, and executive function training for a comprehensive approach.",
      },
      {
        title: "Rational Emotive Behavioral Therapy (REBT)",
        description:
          "Helps individuals identify and change irrational beliefs that contribute to emotional distress. Highly effective for managing anxiety, depression, anger, stress, and self-defeating behaviors.",
      },
    ],
  },
  {
    category: "Skills Training",
    items: [
      {
        title: "Executive Function Skills Training",
        description:
          "Structured, evidence-based approach to improving planning, organization, time management, working memory, emotional regulation, and flexible thinking. Benefits children, teens, and adults with ADHD, ASD, learning disabilities, and more.",
      },
      {
        title: "Social Thinking® Interventions",
        description:
          "Evidence-based strategies that teach the 'why' behind social interactions — including perspective-taking, understanding hidden social rules, managing emotions, and problem-solving in real time.",
      },
      {
        title: "Stress Management & Coping Skills",
        description:
          "Structured training in relaxation techniques, mindfulness, breathing exercises, and cognitive-behavioral strategies. Can be combined with biofeedback and neurofeedback for real-time self-regulation of physiological responses.",
      },
      {
        title: "Progressive Muscle Relaxation (PMR)",
        description:
          "A research-supported relaxation technique that reduces tension and calms the nervous system by systematically tensing and relaxing different muscle groups. Increases body awareness and promotes deep physical and mental relaxation.",
      },
      {
        title: "Handwriting Interventions",
        description:
          "Structured programs including Handwriting Without Tears® and Loops and Other Groups to improve legibility, speed, and confidence. Integrated with fine motor strengthening, visual-motor coordination, and sensory processing strategies.",
      },
    ],
  },
];

export const TESTING = [
  {
    title: "QEEG Brain Mapping",
    subtitle: "Quantitative Electroencephalogram",
    description:
      "An advanced, non-invasive tool that measures and analyzes the brain's electrical activity. Small sensors placed on the scalp record brainwave patterns, which are then compared to a large database of age-typical brain activity to identify patterns linked to ADHD, ASD, anxiety, depression, TBI, and other neurological concerns.",
  },
  {
    title: "Event Related Potential (ERP)",
    subtitle: "Brainwave Response Testing",
    description:
      "A safe, non-invasive assessment that measures how the brain processes information in response to specific stimuli — such as sounds or images. Analyzes the timing and strength of the brain's responses to provide insight into attention, memory, processing speed, and sensory integration.",
  },
  {
    title: "Motor Skills Testing",
    subtitle: "Gross & Fine Motor Assessment",
    description:
      "A comprehensive assessment of how the brain and body work together to plan, coordinate, and execute movement — including both gross motor skills (balance, coordination, core strength) and fine motor skills (handwriting, dexterity, finger control).",
  },
  {
    title: "Executive Function Testing",
    subtitle: "Cognitive Control Assessment",
    description:
      "A comprehensive assessment of the brain-based skills that help manage daily life — including planning, organizing, time management, working memory, emotional regulation, and flexible thinking. Identifies strengths and challenges in cognitive control, attention, problem-solving, and self-regulation.",
  },
  {
    title: "Sensory Processing Testing",
    subtitle: "Sensory Integration Evaluation",
    description:
      "Evaluates how the nervous system receives, interprets, and responds to information from the senses — including sight, sound, touch, movement, taste, and smell. Identifies whether the brain is over- or under-responsive to sensory input or has difficulty integrating sensory information.",
  },
  {
    title: "Cognitive Skills Testing",
    subtitle: "Comprehensive Cognitive Assessment",
    description:
      "A comprehensive assessment of the mental processes the brain uses to take in, understand, and respond to information — including attention, memory, processing speed, reasoning, problem-solving, and visual-spatial abilities.",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Comprehensive Assessment",
    description:
      "We evaluate your or your child's specific challenges with a comprehensive history, a variety of standardized tools, and clinical observations to gain a deep understanding of your condition, needs, and goals.",
  },
  {
    step: "02",
    title: "Personalized Therapy Plan",
    description:
      "Your therapy plan is tailored to address individual needs, integrating a range of cutting-edge techniques, interventions, and activities to facilitate progress and enhance your quality of life.",
  },
  {
    step: "03",
    title: "Progress Tracking",
    description:
      "We closely monitor your progress throughout the therapy process, making adjustments as necessary to ensure you achieve the best possible outcomes.",
  },
];
