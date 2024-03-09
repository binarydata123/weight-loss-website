const mongoose = require('mongoose');

// Private function to check model if exist and return model from string
async function getModelByName(modelName) {
	const modelNames = mongoose.modelNames();
	if (!modelNames.includes(modelName)) {
		throw new Error(`Model ${modelName} not found`);
	}
	return mongoose.model(modelName);
}

// Get record by passing model name and id
async function getRecordById(modelName, id) {
	const Model = await getModelByName(modelName);

	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(`Invalid ${modelName} ID format`);
	}
	const record = await Model.findById(id);
	return record;
}

// Delete record by passing model name and id
async function deleteRecordById(modelName, id) {
	const Model = await getModelByName(modelName);

	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(`Invalid ${modelName} ID format`);
	}

	const record = await Model.findByIdAndDelete(id);
	return record;
}

// Update single column value by passing model, id, column and new Value
async function updateColumnById(modelName, id, columnName, value) {
	const Model = await getModelByName(modelName);
	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(`Invalid ${modelName} ID format`);
	}
	try {
		const updateObject = { [columnName]: value };
		const record = await Model.findByIdAndUpdate(id, updateObject, { new: true });
		return record;
	} catch (error) {
		if (error.code === 11000 && error.keyPattern && error.keyPattern[columnName] === 1) {
			throw new Error(`${columnName} must be unique. The specified value is already in use.`);
		}
		throw error;
	}
}

// Get single column value by passing model, id, column
async function getColumnValueById(modelName, id, columnName) {
	const Model = await getModelByName(modelName);

	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(`Invalid ${modelName} ID`);
	}

	const record = await Model.findById(id);
	const columnValue = record[columnName];
	if (columnValue === undefined) {
		throw new Error(`${columnName} not found in ${modelName} with ID: ${id}`);
	}
	return columnValue;
}

// Update multiple column by passing model , id and columns
async function updateMultipleColumnById(modelName, id, columnsData) {
	const Model = await getModelByName(modelName);
	if (!mongoose.Types.ObjectId.isValid(id)) {
		throw new Error(`Invalid ${modelName} ID`);
	}
	try {
		const record = await Model.findByIdAndUpdate(id, { $set: columnsData }, { new: true });
		return record;
	} catch (error) {
		if (error.code === 11000) {
			throw new Error(`One or more columns must be unique. Duplicate values found.`);
		}
		throw error;
	}
}

// Get all record by passing model name
async function getAllRecords(modelName) {
	const Model = await getModelByName(modelName);
	try {
		const records = await Model.find();
		return records;
	} catch (error) {
		throw new Error(`Error while fetching all records for ${modelName}: ${error.message}`);
	}
}

// Get all record from model with where clause
async function getAllWithWhere(modelName, whereColumnName, whereColumnValue) {
	const Model = await getModelByName(modelName);
	try {
		const conditions = { [whereColumnName]: whereColumnValue };
		const records = await Model.find(conditions);
		return records;
	} catch (error) {
		throw new Error(`Error while fetching records for ${modelName} with conditions: ${error.message}`);
	}
}

module.exports = {
	getRecordById,
	deleteRecordById,
	updateColumnById,
	getColumnValueById,
	updateMultipleColumnById,
	getAllRecords,
	getAllWithWhere
};
