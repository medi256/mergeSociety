"use client";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import ScrollToTop from "@/app/ScrollToTop";

const WeeklyScheduleHtml = () => {
  const [step, setStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Introduction to HTML Tables for Weekly Schedules",
      content: (
        <>
          <h2>Welcome to the HTML Weekly Schedule Tutorial</h2>
          <ScrollToTop />
          <p>
            In this tutorial, we'll guide you through creating a weekly schedule
            using HTML tables. This project is perfect for beginners who want to
            practice their HTML skills and learn how to structure data using
            tables.
          </p>
          <p>
            By the end of this tutorial, you'll have created a schedule that
            includes:
          </p>
          <ul>
            <li>Days of the week as column headers</li>
            <li>Time slots as row headers</li>
            <li>Cells for activities or classes</li>
          </ul>
          <p>
            This project will help you understand how HTML tables work and how
            they can be used to organize information in a grid-like structure.
          </p>
          <p>Let's get started on building your HTML weekly schedule!</p>
        </>
      ),
    },
    {
      title: "Setting Up Your Workspace",
      content: (
        <>
          <ScrollToTop />
          <h2>Creating Your Project Folder</h2>
          <p>
            First, let's set up a workspace for your weekly schedule project:
          </p>
          <ol>
            <li>
              <strong>Create a New Folder:</strong>
              <ul>
                <li>
                  <strong>On Windows:</strong> Right-click on your desktop,
                  select "New" &gt; "Folder", and name it "my-weekly-schedule".
                </li>
                <li>
                  <strong>On Mac:</strong> Right-click on your desktop, select
                  "New Folder", and name it "my-weekly-schedule".
                </li>
              </ul>
            </li>
            <li>
              <strong>Open the Folder in a Text Editor:</strong>
              <ul>
                <li>
                  Open your preferred text editor (e.g., VS Code, Notepad++,
                  Sublime Text) and navigate to the "my-weekly-schedule" folder.
                </li>
              </ul>
            </li>
            <li>
              <strong>Create the HTML File:</strong>
              <ul>
                <li>
                  Create a new file named "index.html" inside the
                  "my-weekly-schedule" folder.
                </li>
              </ul>
            </li>
          </ol>
          <p>
            <strong>Note:</strong> Using "index.html" as your file name is a
            common practice in web development. It's often the default file that
            web servers look for when accessing a directory.
          </p>
          <p>
            Now that your workspace is ready, let's move on to creating the
            basic HTML structure for your weekly schedule.
          </p>
        </>
      ),
    },
    {
      title: "Creating the Basic HTML Structure",
      content: (
        <>
          <h2>Setting Up the HTML Document</h2>
          <ScrollToTop />
          <p>
            Let's start by creating the basic structure of our HTML document.
            This will serve as the foundation for our weekly schedule.
          </p>
          <p>Open your "index.html" file and add the following code:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Weekly Schedule</title>
</head>
<body>
    <h1>My Weekly Schedule</h1>
    <!-- We'll add our table here -->
</body>
</html>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down this HTML structure:</p>
          <ul>
            <li>
              <code>&lt;!DOCTYPE html&gt;</code>: This declaration tells the
              browser that this is an HTML5 document.
            </li>
            <li>
              <code>&lt;html lang="en"&gt;</code>: The root element of the HTML
              page. The <code>lang="en"</code> attribute specifies that the
              content is in English.
            </li>
            <li>
              <code>&lt;head&gt;</code>: This section contains meta information
              about the document.
            </li>
            <li>
              <code>&lt;meta charset="UTF-8"&gt;</code>: Specifies the character
              encoding for the document (UTF-8 supports many languages).
            </li>
            <li>
              <code>&lt;meta name="viewport" ...&gt;</code>: This tag ensures
              that the page is displayed correctly on various devices.
            </li>
            <li>
              <code>&lt;title&gt;</code>: Sets the title of the webpage, which
              appears in the browser tab.
            </li>
            <li>
              <code>&lt;body&gt;</code>: This is where we'll add the visible
              content of our schedule.
            </li>
            <li>
              <code>&lt;h1&gt;</code>: The main heading for our page.
            </li>
          </ul>
          <p>
            Save your file and open it in a web browser. You should see the
            title "My Weekly Schedule" displayed on the page.
          </p>
          <p>In the next step, we'll start creating our schedule table.</p>
        </>
      ),
    },
    {
      title: "Creating the Table Structure",
      content: (
        <>
          <ScrollToTop />
          <h2>Building the Basic Table Structure</h2>
          <p>
            Now that we have our basic HTML structure, let's create the table
            for our weekly schedule. We'll start with a simple structure and
            build upon it.
          </p>
          <p>
            Add the following code inside the <code>&lt;body&gt;</code> tag,
            just below the <code>&lt;h1&gt;</code> element:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<table border="1">
    <thead>
        <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
    </thead>
    <tbody>
        <!-- We'll add time slots and activities here -->
    </tbody>
</table>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down this table structure:</p>
          <ul>
            <li>
              <code>&lt;table border="1"&gt;</code>: This creates a table with a
              visible border. The <code>border</code> attribute is used here for
              demonstration, but in modern web development, we typically use CSS
              for styling.
            </li>
            <li>
              <code>&lt;thead&gt;</code>: This section contains the header
              content of the table.
            </li>
            <li>
              <code>&lt;tr&gt;</code>: Stands for "table row". It defines a row
              in the table.
            </li>
            <li>
              <code>&lt;th&gt;</code>: Stands for "table header". It's used for
              header cells.
            </li>
            <li>
              <code>&lt;tbody&gt;</code>: This section will contain the main
              content of the table.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a table with days of the week as column headers.
          </p>
          <p>
            In the next step, we'll add time slots and activities to complete
            our weekly schedule.
          </p>
        </>
      ),
    },
    {
      title: "Adding Time Slots and Activities",
      content: (
        <>
          <h2>Filling in the Schedule Details</h2>
          <ScrollToTop />
          <p>
            Now that we have our basic table structure, let's add time slots and
            some sample activities to create a full weekly schedule.
          </p>
          <p>
            Replace the <code>&lt;tbody&gt;</code> section of your table with
            the following code:
          </p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<tbody>
    <tr>
        <th>9:00 AM</th>
        <td>Math</td>
        <td>Science</td>
        <td>English</td>
        <td>History</td>
        <td>Art</td>
    </tr>
    <tr>
        <th>10:00 AM</th>
        <td>Physics</td>
        <td>Chemistry</td>
        <td>Biology</td>
        <td>Geography</td>
        <td>Music</td>
    </tr>
    <tr>
        <th>11:00 AM</th>
        <td>Break</td>
        <td>Break</td>
        <td>Break</td>
        <td>Break</td>
        <td>Break</td>
    </tr>
    <tr>
        <th>12:00 PM</th>
        <td>Lunch</td>
        <td>Lunch</td>
        <td>Lunch</td>
        <td>Lunch</td>
        <td>Lunch</td>
    </tr>
    <tr>
        <th>1:00 PM</th>
        <td>Computer Science</td>
        <td>Physical Education</td>
        <td>Literature</td>
        <td>Foreign Language</td>
        <td>Economics</td>
    </tr>
</tbody>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's understand the structure we've added:</p>
          <ul>
            <li>
              Each <code>&lt;tr&gt;</code> represents a row in our schedule,
              corresponding to a specific time slot.
            </li>
            <li>
              The first <code>&lt;th&gt;</code> in each row shows the time slot.
            </li>
            <li>
              Each <code>&lt;td&gt;</code> (table data) cell represents an
              activity or class for that time slot on a specific day.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a complete weekly schedule with time slots and activities.
          </p>
          <p>
            In the final step, we'll add some finishing touches to make our
            schedule more informative and user-friendly.
          </p>
        </>
      ),
    },
    {
      title: "Adding Finishing Touches",
      content: (
        <>
          <ScrollToTop />
          <h2>Enhancing Your Weekly Schedule</h2>
          <p>
            To make our weekly schedule more informative and easier to read,
            let's add a few finishing touches. We'll add a caption to the table
            and use the <code>colspan</code> attribute to create a cell that
            spans multiple columns for lunch time.
          </p>
          <p>Update your table code as follows:</p>
          <pre>
            <code>
              <SyntaxHighlighter language="html" style={docco}>
                {`<table border="1">
    <caption>My Class Schedule for Fall 2024</caption>
    <thead>
        <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>9:00 AM</th>
            <td>Math</td>
            <td>Science</td>
            <td>English</td>
            <td>History</td>
            <td>Art</td>
        </tr>
        <tr>
            <th>10:00 AM</th>
            <td>Physics</td>
            <td>Chemistry</td>
            <td>Biology</td>
            <td>Geography</td>
            <td>Music</td>
        </tr>
        <tr>
            <th>11:00 AM</th>
            <td>Break</td>
            <td>Break</td>
            <td>Break</td>
            <td>Break</td>
            <td>Break</td>
        </tr>
        <tr>
            <th>12:00 PM</th>
            <td colspan="5">Lunch Break</td>
        </tr>
        <tr>
            <th>1:00 PM</th>
            <td>Computer Science</td>
            <td>Physical Education</td>
            <td>Literature</td>
            <td>Foreign Language</td>
            <td>Economics</td>
        </tr>
    </tbody>
</table>`}
              </SyntaxHighlighter>
            </code>
          </pre>
          <p>Let's break down the new elements we've added:</p>
          <ul>
            <li>
              <code>&lt;caption&gt;</code>: This tag adds a title or explanation
              for the table. It's typically displayed above the table.
            </li>
            <li>
              <code>colspan="5"</code>: This attribute makes the lunch break
              cell span across all five weekdays, creating a unified lunch break
              row.
            </li>
          </ul>
          <p>
            Save your file and refresh it in your web browser. You should now
            see a more polished weekly schedule with a caption and a unified
            lunch break row.
          </p>
          <h3>Congratulations!</h3>
          <p>
            You've successfully created an HTML table for a weekly schedule.
            This project has helped you practice:
          </p>
          <ul>
            <li>Creating the basic structure of an HTML document</li>
            <li>Using HTML tables to organize information</li>
            <li>
              Working with table headers (<code>&lt;th&gt;</code>) and data
              cells (<code>&lt;td&gt;</code>)
            </li>
            <li>
              Using the <code>colspan</code> attribute to span cells across
              columns
            </li>
            <li>Adding a caption to provide context for your table</li>
          </ul>
          <p>
            Feel free to customize this schedule further by adding your own
            classes, changing the time slots, or even adding weekend activities.
            Remember, practice makes perfect in web development!
          </p>
        </>
      ),
    },
  ];

  const handlePrevious = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="lesson-container">
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <h1
          style={{
            color: "#333",
            borderBottom: "2px solid #333",
            paddingBottom: "10px",
          }}
        >
          Creating an HTML Table for Weekly Schedules
        </h1>
        <div style={{ marginBottom: "20px" }}>
          <h2 style={{ color: "#444" }}>
            Step {step + 1}: {tutorialSteps[step].title}
          </h2>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            {tutorialSteps[step].content}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={handlePrevious}
            disabled={step === 0}
            style={{
              padding: "10px 20px",
              backgroundColor: step === 0 ? "#ccc" : "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: step === 0 ? "not-allowed" : "pointer",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={step === tutorialSteps.length - 1}
            style={{
              padding: "10px 20px",
              backgroundColor:
                step === tutorialSteps.length - 1 ? "#ccc" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor:
                step === tutorialSteps.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            {step === tutorialSteps.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeeklyScheduleHtml;
