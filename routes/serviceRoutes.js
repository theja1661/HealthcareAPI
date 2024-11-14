const express = require('express');
const Service = require('../models/Service'); 
const router = express.Router();


router.post('/add-service', async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !description || !price) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newService = new Service({ name, description, price });
    await newService.save();
    res.status(201).json({ message: 'Service added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.get('/get-services', async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.put('/update-service/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service.name = name || service.name;
    service.description = description || service.description;
    service.price = price || service.price;

    await service.save();
    res.status(200).json({ message: 'Service updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


router.delete('/delete-service/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }
    res.status(200).json({ message: 'Service deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
