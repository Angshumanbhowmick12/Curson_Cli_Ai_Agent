# cursor_cli: AI-Powered Web Project Generator

---

## Overview

`cursor_cli` is an innovative command-line interface (CLI) agent that revolutionizes web development by allowing you to generate entire web projects using natural language prompts. Leveraging the power of the **Gemini API**, this agent can create static HTML, CSS, and JavaScript websites from scratch, and even scaffold complete React applications.

Beyond code generation, `cursor_cli` streamlines your workflow by automatically initializing a Git repository, committing the generated code, and pushing it to a remote repository, all based on your initial prompt.

---

## Features

* **Natural Language to Web Code:** Describe the website you want, and `cursor_cli` will generate the HTML, CSS, and JavaScript.

* **React Application Scaffolding:** Easily create new React projects with a simple prompt.

* **Automated Git Workflow:**
    * Initializes a new Git repository for your generated project.
    * Automatically stages and commits the generated files.
    * Pushes the new project to a specified remote Git repository.

* **Intelligent Code Generation:** Powered by the **Gemini API** for high-quality, relevant, and functional code.

* **CLI-Driven:** Seamlessly integrate into your development environment via command line.

---

## Technologies Used

* **Gemini API:** For large language model capabilities, enabling natural language understanding and code generation.

* **Python:** (Assuming your CLI is built with Python) The core language for the agent's logic.

* **GitPython (or similar):** (Likely used for Git operations) A library for interacting with Git repositories.

* **HTML, CSS, JavaScript:** The foundational web technologies generated.

* **React:** The JavaScript library for building user interfaces.

---

## Getting Started

Follow these steps to set up and start using `cursor_cli`.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Python 3.9+**
* **`pip`** (Python package installer)
* **Git** (installed and configured on your system)
* **Gemini API Key:** Obtain one from the [Google AI Studio](https://aistudio.google.com/app/apikey) or your Google Cloud project.

### Installation

1.  **Clone the Repository:**

    ```bash
    git clone 
    cd cursor_cli
    ```

2.  **Create a Virtual Environment (Recommended):**
    This helps manage project dependencies in isolation.

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
    ```

3.  **Install Dependencies:**
    Make sure you have a `requirements.txt` file in your project root with all the necessary libraries. If you don't, create one based on the example below.

    ```bash
    pip install -r requirements.txt
    ```

    **Example `requirements.txt` content:**

    ```
    google-generativeai # For Gemini API interaction
    GitPython           # Or any other library you use for Git operations
    python-dotenv       # For loading environment variables
    # Add any other libraries your CLI depends on
    ```

### Configuration

1.  **Set Environment Variables:**
    Create a file named `.env` in the root of your `cursor_cli` project to store your Gemini API key.

    ```dotenv
    GEMINI_API_KEY="your_gemini_api_key_here"
    ```

    * **Replace `"your_gemini_api_key_here"`** with your actual Gemini API key.

