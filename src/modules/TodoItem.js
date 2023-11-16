import { formatDate } from '../utilities/formatDate';
export class TodoItem {
	constructor(title, description, dueDate, priority, notes) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
		this.completed = false;
	}

	// Toggle the status
	toggleCompleted() {
		this.completed = !this.completed;
	}
	// Update the details
	updateDetails({ title, description, dueDate, priority, notes }) {
		if (title !== undefined) this.title = title;
		if (description !== undefined) this.description = description;
		if (dueDate !== undefined) this.dueDate = dueDate;
		if (priority !== undefined) this.priority = priority;
		if (notes !== undefined) this.notes = notes;
	}
	// Formats the due date
	getFormattedDueDate() {
		return formatDate(this.dueDate);
	}
}
