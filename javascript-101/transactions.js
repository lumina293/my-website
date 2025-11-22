let transactions = [
    { date: '2025-11-01', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-01', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-01', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-01', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-01', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-01', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-01', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-01', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-01', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-01', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-02', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-02', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-02', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-02', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-02', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-02', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-02', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-02', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-02', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-02', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-03', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-03', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-03', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-03', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-03', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-03', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-03', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-03', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-03', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-03', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-04', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-04', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-04', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-04', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-04', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-04', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-04', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-04', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-04', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-04', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-05', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-05', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-05', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-05', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-05', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-05', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-05', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-05', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-05', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-05', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-06', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-06', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-06', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-06', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-06', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-06', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-06', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-06', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-06', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-06', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-07', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-07', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-07', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-07', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-07', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-07', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-07', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-07', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-07', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-07', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-08', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-08', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-08', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-08', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-08', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-08', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-08', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-08', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-08', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-08', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-09', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-09', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-09', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-09', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-09', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-09', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-09', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-09', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-09', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-09', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-10', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-10', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-10', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-10', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-10', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-10', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-10', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-10', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-10', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-10', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-11', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-11', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-11', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-11', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-11', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-11', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-11', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-11', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-11', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-11', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-12', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-12', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-12', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-12', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-12', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-12', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-12', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-12', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-12', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-12', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-13', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-13', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-13', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-13', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-13', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-13', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-13', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-13', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-13', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-13', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-14', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-14', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-14', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-14', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-14', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-14', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-14', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-14', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-14', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-14', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-15', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-15', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-15', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-15', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-15', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-15', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-15', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-15', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-15', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-15', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },
    { date: '2025-11-26', description: 'Rent', amount: 1_000.00, category: 'Rent' },

    { date: '2025-11-16', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-16', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-16', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-16', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-16', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-16', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-16', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-16', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-16', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-16', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-17', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-17', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-17', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-17', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-17', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-17', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-17', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-17', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-17', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-17', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-18', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-18', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-18', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-18', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-18', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-18', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-18', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-18', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-18', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-18', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-19', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-19', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-19', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-19', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-19', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-19', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-19', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-19', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-19', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-19', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-20', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-20', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-20', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-20', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-20', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-20', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-20', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-20', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-20', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-20', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-21', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-21', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-21', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-21', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-21', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-21', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-21', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-21', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-21', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-21', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-22', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-22', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-22', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-22', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-22', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-22', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-22', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-22', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-22', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-22', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-23', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-23', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-23', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-23', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-23', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-23', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-23', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-23', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-23', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-23', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-24', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-24', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-24', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-24', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-24', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-24', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-24', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-24', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-24', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-24', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-25', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-25', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-25', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-25', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-25', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-25', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-25', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-25', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-25', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-25', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-26', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-26', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-26', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-26', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-26', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-26', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-26', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-26', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-26', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-26', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },
    { date: '2025-11-26', description: 'Salary deposit', amount: 10_000.00, category: 'Salary' },

    { date: '2025-11-27', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-27', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-27', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-27', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-27', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-27', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-27', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-27', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-27', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-27', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-28', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-28', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-28', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-28', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-28', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-28', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-28', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-28', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-28', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-28', description: 'Investion', amount: 2000.00, category: 'Invest' },

    { date: '2025-11-29', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-29', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-29', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-29', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-29', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-29', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-29', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-29', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-29', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-29', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },

    { date: '2025-11-30', description: 'Grocery Store', amount: -54.23, category: 'Food' },
    { date: '2025-11-30', description: 'Coffee Shop', amount: -3.50, category: 'Food' },
    { date: '2025-11-30', description: 'Restaurant', amount: -28.90, category: 'Food' },
    { date: '2025-11-30', description: 'Gas Station', amount: -40.00, category: 'Transport' },
    { date: '2025-11-30', description: 'Online Purchase', amount: -120.00, category: 'Shopping' },
    { date: '2025-11-30', description: 'Subscription', amount: -9.99, category: 'Utilities' },
    { date: '2025-11-30', description: 'Movie Tickets', amount: -15.00, category: 'Entertainment' },
    { date: '2025-11-30', description: 'Bakery', amount: -5.75, category: 'Food' },
    { date: '2025-11-30', description: 'Pharmacy', amount: -32.10, category: 'Health' },
    { date: '2025-11-30', description: 'ATM Withdrawal', amount: -100.00, category: 'Cash' },
]

let totalIncome = 0
let totalExpense = 0

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].amount > 0) {
        totalIncome += transactions[i].amount;
    } else {
        totalExpense += - transactions[i].amount;
    }
}
let Savings = totalIncome - totalExpense;
console.log("Total income: " + totalIncome, "Total expense: " + totalExpense, "and Savings: " + Savings);

let maxIncome = 0
let minIncome = Infinity
for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].amount > 0) {
        if (transactions[i].amount > maxIncome) {
            maxIncome = transactions[i].amount;
        }
        if (transactions[i].amount < minIncome) {
            minIncome = transactions[i].amount;
        }
    }
}
console.log("The highest income transaction is: " + maxIncome + " The lowest income transaction is: " + minIncome)

let maxExpense = 0
let minExpense = -Infinity
for (let i = 1; i < transactions.length; i++) {
    if (transactions[i].amount < 0) {
        if (transactions[i].amount < maxExpense) {
            maxExpense = transactions[i].amount;
        }
        if (transactions[i].amount > minExpense) {
            minExpense = transactions[i].amount;
        }
    }
}
console.log("The highest expense transaction is: " + maxExpense + " The lowest expense transaction is: " + minExpense)


let expenseByCategories = {}
for (let i = 0; i < transactions.length; i++) {
    let tx = transactions[i]
    // kiểm tra xem trong expenseByCategories đã có loại tx.category hay chưa
    if (tx.category in expenseByCategories) {
        // Nếu đã có, thì cộng thêm tx.amount vào expenseByCategories[tx.category]
        //     Ví dụ: expenseByCategories['Food'] += -28.90
        expenseByCategories[tx.category] = expenseByCategories[tx.category] + tx.amount
    } else {
        // Nếu chưa có, thì gán expenseByCategories[tx.category] = tx.amount
        //     Ví dụ: expenseByCategories['Transport'] = -40.00
        expenseByCategories[tx.category] = tx.amount
    }
}
console.log(expenseByCategories)

