-- Create the items table for the tracker
CREATE TABLE IF NOT EXISTS items (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    supplier VARCHAR(255) NOT NULL,
    stage VARCHAR(50) NOT NULL CHECK (stage IN ('Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored')),
    creation_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expected_time TIMESTAMP WITH TIME ZONE NOT NULL,
    update_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create the timeline table to track stage transitions
CREATE TABLE IF NOT EXISTS item_timeline (
    id SERIAL PRIMARY KEY,
    item_id INTEGER NOT NULL REFERENCES items(id) ON DELETE CASCADE,
    stage VARCHAR(50) NOT NULL CHECK (stage IN ('Created', 'In Transit', 'Arrived at Dock', 'Inspected', 'Stored')),
    entered_time TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    expected_exit_time TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_items_stage ON items(stage);
CREATE INDEX IF NOT EXISTS idx_items_creation_time ON items(creation_time);
CREATE INDEX IF NOT EXISTS idx_items_expected_time ON items(expected_time);
CREATE INDEX IF NOT EXISTS idx_timeline_item_id ON item_timeline(item_id);
CREATE INDEX IF NOT EXISTS idx_timeline_stage ON item_timeline(stage);
CREATE INDEX IF NOT EXISTS idx_timeline_entered_time ON item_timeline(entered_time);

-- Insert comprehensive sample data for virtualization testing
INSERT INTO items (name, supplier, stage, creation_time, expected_time) VALUES
    -- Electronics & Computing
    ('Laptop Dell XPS 13', 'Dell Technologies', 'Created', NOW() - INTERVAL '1 day', NOW() + INTERVAL '14 days'),
    ('MacBook Pro 16" M3', 'Apple Inc.', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '12 days'),
    ('Surface Pro 9', 'Microsoft Corporation', 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '8 days'),
    ('ThinkPad X1 Carbon', 'Lenovo Group', 'Inspected', NOW() - INTERVAL '4 days', NOW() + INTERVAL '5 days'),
    ('HP Spectre x360', 'HP Inc.', 'Stored', NOW() - INTERVAL '15 days', NOW() - INTERVAL '2 days'),
    ('iPad Air 5th Gen', 'Apple Inc.', 'Created', NOW() - INTERVAL '1 hour', NOW() + INTERVAL '10 days'),
    ('Samsung Galaxy Tab S9', 'Samsung Electronics', 'In Transit', NOW() - INTERVAL '6 days', NOW() + INTERVAL '4 days'),
    ('Surface Tablet Pro', 'Microsoft Corporation', 'Arrived at Dock', NOW() - INTERVAL '8 days', NOW() + INTERVAL '2 days'),
    ('iPhone 15 Pro Max', 'Apple Inc.', 'Inspected', NOW() - INTERVAL '12 days', NOW() + INTERVAL '1 day'),
    ('Samsung Galaxy S24 Ultra', 'Samsung Electronics', 'Stored', NOW() - INTERVAL '20 days', NOW() - INTERVAL '5 days'),
    
    -- Office Furniture
    ('Office Chair Ergonomic', 'Herman Miller', 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '21 days'),
    ('Standing Desk Electric', 'Steelcase Inc.', 'In Transit', NOW() - INTERVAL '5 days', NOW() + INTERVAL '15 days'),
    ('Conference Table Oak', 'Herman Miller', 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() + INTERVAL '10 days'),
    ('Bookshelf Modular', 'IKEA Group', 'Inspected', NOW() - INTERVAL '9 days', NOW() + INTERVAL '3 days'),
    ('File Cabinet 4-Drawer', 'Steelcase Inc.', 'Stored', NOW() - INTERVAL '25 days', NOW() - INTERVAL '8 days'),
    ('Whiteboard Magnetic 6ft', 'Office Depot', 'Created', NOW() - INTERVAL '3 hours', NOW() + INTERVAL '18 days'),
    ('Desk Lamp LED Adjustable', 'Philips Electronics', 'In Transit', NOW() - INTERVAL '4 days', NOW() + INTERVAL '16 days'),
    
    -- Monitors & Displays
    ('Monitor 27" 4K Dell', 'Dell Technologies', 'Created', NOW() - INTERVAL '30 minutes', NOW() + INTERVAL '9 days'),
    ('LG UltraWide 34"', 'LG Electronics', 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '11 days'),
    ('Samsung Odyssey G9', 'Samsung Electronics', 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() + INTERVAL '7 days'),
    ('ASUS ProArt Display', 'ASUS Computer', 'Inspected', NOW() - INTERVAL '10 days', NOW() + INTERVAL '2 days'),
    ('BenQ PD3220U', 'BenQ Corporation', 'Stored', NOW() - INTERVAL '18 days', NOW() - INTERVAL '3 days'),
    ('ViewSonic VP2468', 'ViewSonic Corporation', 'Created', NOW() - INTERVAL '45 minutes', NOW() + INTERVAL '13 days'),
    
    -- Input Devices
    ('Mechanical Keyboard RGB', 'Logitech International', 'Created', NOW() - INTERVAL '15 minutes', NOW() + INTERVAL '7 days'),
    ('Wireless Mouse MX Master', 'Logitech International', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '8 days'),
    ('Gaming Headset Wireless', 'Sony Corporation', 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '6 days'),
    ('Webcam 4K Ultra HD', 'Logitech International', 'Inspected', NOW() - INTERVAL '7 days', NOW() + INTERVAL '4 days'),
    ('Drawing Tablet Wacom', 'Wacom Technology', 'Stored', NOW() - INTERVAL '22 days', NOW() - INTERVAL '6 days'),
    
    -- Networking Equipment
    ('Network Switch 24-port', 'Cisco Systems', 'Created', NOW() - INTERVAL '4 hours', NOW() + INTERVAL '20 days'),
    ('Router WiFi 6E', 'Netgear Inc.', 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '17 days'),
    ('Access Point Enterprise', 'Cisco Systems', 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '12 days'),
    ('Ethernet Cable Cat6A', 'Cable Matters', 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '9 days'),
    ('Network Rack 42U', 'APC by Schneider', 'Stored', NOW() - INTERVAL '30 days', NOW() - INTERVAL '10 days'),
    ('Patch Panel 48-port', 'Panduit Corporation', 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '15 days'),
    
    -- Printers & Scanners
    ('Printer Laser Color', 'HP Inc.', 'Created', NOW() - INTERVAL '6 hours', NOW() + INTERVAL '11 days'),
    ('Scanner Document A3', 'Canon Inc.', 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '14 days'),
    ('All-in-One Printer', 'Epsom America', 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    ('Label Printer Thermal', 'Brother Industries', 'Inspected', NOW() - INTERVAL '8 days', NOW() + INTERVAL '3 days'),
    ('Wide Format Plotter', 'HP Inc.', 'Stored', NOW() - INTERVAL '35 days', NOW() - INTERVAL '12 days'),
    
    -- Server & Storage
    ('Server Dell PowerEdge', 'Dell Technologies', 'Created', NOW() - INTERVAL '12 hours', NOW() + INTERVAL '25 days'),
    ('NAS Storage 8-Bay', 'Synology Inc.', 'In Transit', NOW() - INTERVAL '4 days', NOW() + INTERVAL '18 days'),
    ('SSD Drive 2TB NVMe', 'Samsung Electronics', 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() + INTERVAL '5 days'),
    ('RAM DDR5 64GB Kit', 'Corsair Memory', 'Inspected', NOW() - INTERVAL '11 days', NOW() + INTERVAL '1 day'),
    ('Graphics Card RTX 4090', 'NVIDIA Corporation', 'Stored', NOW() - INTERVAL '28 days', NOW() - INTERVAL '7 days'),
    ('UPS Battery 1500VA', 'APC by Schneider', 'Created', NOW() - INTERVAL '8 hours', NOW() + INTERVAL '16 days'),
    
    -- Audio/Visual Equipment
    ('Projector 4K Laser', 'Epson America', 'Created', NOW() - INTERVAL '5 hours', NOW() + INTERVAL '22 days'),
    ('Sound System 5.1', 'Bose Corporation', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '19 days'),
    ('Digital Signage Display', 'Samsung Electronics', 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() + INTERVAL '13 days'),
    ('Conference Camera 360', 'Logitech International', 'Inspected', NOW() - INTERVAL '9 days', NOW() + INTERVAL '6 days'),
    ('Microphone System', 'Shure Incorporated', 'Stored', NOW() - INTERVAL '24 days', NOW() - INTERVAL '4 days'),
    
    -- Security Equipment
    ('Security Camera 4K PoE', 'Hikvision Digital', 'Created', NOW() - INTERVAL '3 hours', NOW() + INTERVAL '12 days'),
    ('Access Control Panel', 'HID Global', 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '15 days'),
    ('Motion Sensor Wireless', 'Honeywell International', 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '9 days'),
    ('Door Lock Electronic', 'Yale Security', 'Inspected', NOW() - INTERVAL '5 days', NOW() + INTERVAL '7 days'),
    ('Alarm System Kit', 'ADT Security', 'Stored', NOW() - INTERVAL '21 days', NOW() - INTERVAL '1 day'),
    
    -- Office Supplies & Misc
    ('Coffee Machine Premium', 'Jura Elektroapparate', 'Created', NOW() - INTERVAL '1 hour', NOW() + INTERVAL '8 days'),
    ('Water Cooler Bottleless', 'Culligan International', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '10 days'),
    ('Air Purifier HEPA', 'Dyson Ltd.', 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '11 days'),
    ('Shredder Cross-Cut', 'Fellowes Inc.', 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '4 days'),
    ('Vacuum Cleaner Robot', 'iRobot Corporation', 'Stored', NOW() - INTERVAL '19 days', NOW() - INTERVAL '2 days'),
    ('Plant Pot Smart', 'Click & Grow', 'Created', NOW() - INTERVAL '30 minutes', NOW() + INTERVAL '6 days'),
    ('Trash Bin Motion Sensor', 'Simplehuman', 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '9 days'),
    
    -- Tools & Equipment
    ('Drill Kit Cordless', 'DeWalt Industrial', 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '14 days'),
    ('Tool Cart Mobile', 'Craftsman Tools', 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '12 days'),
    ('Multimeter Digital', 'Fluke Corporation', 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    ('Oscilloscope Portable', 'Tektronix Inc.', 'Inspected', NOW() - INTERVAL '7 days', NOW() + INTERVAL '5 days'),
    ('Soldering Station', 'Weller Tools', 'Stored', NOW() - INTERVAL '16 days', NOW() - INTERVAL '3 days'),
    
    -- Healthcare & Safety
    ('First Aid Kit Professional', 'Johnson & Johnson', 'Created', NOW() - INTERVAL '4 hours', NOW() + INTERVAL '7 days'),
    ('Fire Extinguisher CO2', '3M Company', 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '13 days'),
    ('Emergency Light LED', 'Cooper Lighting', 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '10 days'),
    ('Defibrillator AED', 'Philips Healthcare', 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '6 days'),
    ('Safety Cabinet Flammable', 'Justrite Manufacturing', 'Stored', NOW() - INTERVAL '27 days', NOW() - INTERVAL '9 days'),
    
    -- Kitchen & Break Room
    ('Refrigerator Commercial', 'Whirlpool Corporation', 'Created', NOW() - INTERVAL '6 hours', NOW() + INTERVAL '21 days'),
    ('Microwave 1200W', 'Panasonic Corporation', 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '11 days'),
    ('Dishwasher Undercounter', 'Bosch Home Appliances', 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '14 days'),
    ('Ice Maker Countertop', 'Scotsman Ice Systems', 'Inspected', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    ('Toaster Oven Convection', 'Breville USA', 'Stored', NOW() - INTERVAL '23 days', NOW() - INTERVAL '5 days')
ON CONFLICT DO NOTHING;

-- Insert comprehensive timeline data for all items
INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time) VALUES
    -- Item 1: Laptop Dell XPS 13 (Created)
    (1, 'Created', NOW() - INTERVAL '1 day', NOW() + INTERVAL '1 day'),
    
    -- Item 2: MacBook Pro 16" M3 (In Transit)
    (2, 'Created', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (2, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '12 days'),
    
    -- Item 3: Surface Pro 9 (Arrived at Dock)
    (3, 'Created', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (3, 'In Transit', NOW() - INTERVAL '6 days', NOW() - INTERVAL '4 days'),
    (3, 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '8 days'),
    
    -- Item 4: ThinkPad X1 Carbon (Inspected)
    (4, 'Created', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (4, 'In Transit', NOW() - INTERVAL '9 days', NOW() - INTERVAL '7 days'),
    (4, 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (4, 'Inspected', NOW() - INTERVAL '4 days', NOW() + INTERVAL '5 days'),
    
    -- Item 5: HP Spectre x360 (Stored)
    (5, 'Created', NOW() - INTERVAL '20 days', NOW() - INTERVAL '19 days'),
    (5, 'In Transit', NOW() - INTERVAL '18 days', NOW() - INTERVAL '16 days'),
    (5, 'Arrived at Dock', NOW() - INTERVAL '16 days', NOW() - INTERVAL '14 days'),
    (5, 'Inspected', NOW() - INTERVAL '16 days', NOW() - INTERVAL '15 days'),
    (5, 'Stored', NOW() - INTERVAL '15 days', NULL),
    
    -- Item 6: iPad Air 5th Gen (Created)
    (6, 'Created', NOW() - INTERVAL '1 hour', NOW() + INTERVAL '2 days'),
    
    -- Item 7: Samsung Galaxy Tab S9 (In Transit)
    (7, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (7, 'In Transit', NOW() - INTERVAL '6 days', NOW() + INTERVAL '4 days'),
    
    -- Item 8: Surface Tablet Pro (Arrived at Dock)
    (8, 'Created', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (8, 'In Transit', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (8, 'Arrived at Dock', NOW() - INTERVAL '8 days', NOW() + INTERVAL '2 days'),
    
    -- Item 9: iPhone 15 Pro Max (Inspected)
    (9, 'Created', NOW() - INTERVAL '18 days', NOW() - INTERVAL '17 days'),
    (9, 'In Transit', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days'),
    (9, 'Arrived at Dock', NOW() - INTERVAL '14 days', NOW() - INTERVAL '13 days'),
    (9, 'Inspected', NOW() - INTERVAL '12 days', NOW() + INTERVAL '1 day'),
    
    -- Item 10: Samsung Galaxy S24 Ultra (Stored)
    (10, 'Created', NOW() - INTERVAL '25 days', NOW() - INTERVAL '24 days'),
    (10, 'In Transit', NOW() - INTERVAL '23 days', NOW() - INTERVAL '22 days'),
    (10, 'Arrived at Dock', NOW() - INTERVAL '22 days', NOW() - INTERVAL '21 days'),
    (10, 'Inspected', NOW() - INTERVAL '21 days', NOW() - INTERVAL '20 days'),
    (10, 'Stored', NOW() - INTERVAL '20 days', NULL),
    
    -- Item 11: Office Chair Ergonomic (Created)
    (11, 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '3 days'),
    
    -- Item 12: Standing Desk Electric (In Transit)
    (12, 'Created', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (12, 'In Transit', NOW() - INTERVAL '5 days', NOW() + INTERVAL '15 days'),
    
    -- Item 13: Conference Table Oak (Arrived at Dock)
    (13, 'Created', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (13, 'In Transit', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (13, 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() + INTERVAL '10 days'),
    
    -- Item 14: Bookshelf Modular (Inspected)
    (14, 'Created', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days'),
    (14, 'In Transit', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (14, 'Arrived at Dock', NOW() - INTERVAL '11 days', NOW() - INTERVAL '10 days'),
    (14, 'Inspected', NOW() - INTERVAL '9 days', NOW() + INTERVAL '3 days'),
    
    -- Item 15: File Cabinet 4-Drawer (Stored)
    (15, 'Created', NOW() - INTERVAL '30 days', NOW() - INTERVAL '29 days'),
    (15, 'In Transit', NOW() - INTERVAL '28 days', NOW() - INTERVAL '27 days'),
    (15, 'Arrived at Dock', NOW() - INTERVAL '27 days', NOW() - INTERVAL '26 days'),
    (15, 'Inspected', NOW() - INTERVAL '26 days', NOW() - INTERVAL '25 days'),
    (15, 'Stored', NOW() - INTERVAL '25 days', NULL),
    
    -- Item 16: Whiteboard Magnetic 6ft (Created)
    (16, 'Created', NOW() - INTERVAL '3 hours', NOW() + INTERVAL '4 days'),
    
    -- Item 17: Desk Lamp LED Adjustable (In Transit)
    (17, 'Created', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (17, 'In Transit', NOW() - INTERVAL '4 days', NOW() + INTERVAL '16 days'),
    
    -- Item 18: Monitor 27" 4K Dell (Created)
    (18, 'Created', NOW() - INTERVAL '30 minutes', NOW() + INTERVAL '2 days'),
    
    -- Item 19: LG UltraWide 34" (In Transit)
    (19, 'Created', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (19, 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '11 days'),
    
    -- Item 20: Samsung Odyssey G9 (Arrived at Dock)
    (20, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (20, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (20, 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() + INTERVAL '7 days'),
    
    -- Item 21: ASUS ProArt Display (Inspected)
    (21, 'Created', NOW() - INTERVAL '16 days', NOW() - INTERVAL '15 days'),
    (21, 'In Transit', NOW() - INTERVAL '13 days', NOW() - INTERVAL '12 days'),
    (21, 'Arrived at Dock', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (21, 'Inspected', NOW() - INTERVAL '10 days', NOW() + INTERVAL '2 days'),
    
    -- Item 22: BenQ PD3220U (Stored)
    (22, 'Created', NOW() - INTERVAL '24 days', NOW() - INTERVAL '23 days'),
    (22, 'In Transit', NOW() - INTERVAL '21 days', NOW() - INTERVAL '20 days'),
    (22, 'Arrived at Dock', NOW() - INTERVAL '20 days', NOW() - INTERVAL '19 days'),
    (22, 'Inspected', NOW() - INTERVAL '19 days', NOW() - INTERVAL '18 days'),
    (22, 'Stored', NOW() - INTERVAL '18 days', NULL),
    
    -- Item 23: ViewSonic VP2468 (Created)
    (23, 'Created', NOW() - INTERVAL '45 minutes', NOW() + INTERVAL '3 days'),
    
    -- Item 24: Mechanical Keyboard RGB (Created)
    (24, 'Created', NOW() - INTERVAL '15 minutes', NOW() + INTERVAL '1 day'),
    
    -- Item 25: Wireless Mouse MX Master (In Transit)
    (25, 'Created', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days'),
    (25, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '8 days'),
    
    -- Item 26: Gaming Headset Wireless (Arrived at Dock)
    (26, 'Created', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (26, 'In Transit', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (26, 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '6 days'),
    
    -- Item 27: Webcam 4K Ultra HD (Inspected)
    (27, 'Created', NOW() - INTERVAL '11 days', NOW() - INTERVAL '10 days'),
    (27, 'In Transit', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (27, 'Arrived at Dock', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (27, 'Inspected', NOW() - INTERVAL '7 days', NOW() + INTERVAL '4 days'),
    
    -- Item 28: Drawing Tablet Wacom (Stored)
    (28, 'Created', NOW() - INTERVAL '28 days', NOW() - INTERVAL '27 days'),
    (28, 'In Transit', NOW() - INTERVAL '26 days', NOW() - INTERVAL '25 days'),
    (28, 'Arrived at Dock', NOW() - INTERVAL '25 days', NOW() - INTERVAL '24 days'),
    (28, 'Inspected', NOW() - INTERVAL '24 days', NOW() - INTERVAL '22 days'),
    (28, 'Stored', NOW() - INTERVAL '22 days', NULL),
    
    -- Item 29: Network Switch 24-port (Created)
    (29, 'Created', NOW() - INTERVAL '4 hours', NOW() + INTERVAL '5 days'),
    
    -- Item 30: Router WiFi 6E (In Transit)
    (30, 'Created', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day'),
    (30, 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '17 days'),
    
    -- Item 31: Access Point Enterprise (Arrived at Dock)
    (31, 'Created', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (31, 'In Transit', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (31, 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '12 days'),
    
    -- Item 32: Ethernet Cable Cat6A (Inspected)
    (32, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (32, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (32, 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (32, 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '9 days'),
    
    -- Item 33: Network Rack 42U (Stored)
    (33, 'Created', NOW() - INTERVAL '35 days', NOW() - INTERVAL '34 days'),
    (33, 'In Transit', NOW() - INTERVAL '33 days', NOW() - INTERVAL '32 days'),
    (33, 'Arrived at Dock', NOW() - INTERVAL '32 days', NOW() - INTERVAL '31 days'),
    (33, 'Inspected', NOW() - INTERVAL '31 days', NOW() - INTERVAL '30 days'),
    (33, 'Stored', NOW() - INTERVAL '30 days', NULL),
    
    -- Item 34: Patch Panel 48-port (Created)
    (34, 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '15 days'),
    
    -- Item 35: Printer Laser Color (Created)
    (35, 'Created', NOW() - INTERVAL '6 hours', NOW() + INTERVAL '11 days'),
    
    -- Item 36: Scanner Document A3 (In Transit)
    (36, 'Created', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (36, 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '14 days'),
    
    -- Item 37: All-in-One Printer (Arrived at Dock)
    (37, 'Created', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (37, 'In Transit', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (37, 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    
    -- Item 38: Label Printer Thermal (Inspected)
    (38, 'Created', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (38, 'In Transit', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (38, 'Arrived at Dock', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (38, 'Inspected', NOW() - INTERVAL '8 days', NOW() + INTERVAL '3 days'),
    
    -- Item 39: Wide Format Plotter (Stored)
    (39, 'Created', NOW() - INTERVAL '40 days', NOW() - INTERVAL '39 days'),
    (39, 'In Transit', NOW() - INTERVAL '38 days', NOW() - INTERVAL '37 days'),
    (39, 'Arrived at Dock', NOW() - INTERVAL '37 days', NOW() - INTERVAL '36 days'),
    (39, 'Inspected', NOW() - INTERVAL '36 days', NOW() - INTERVAL '35 days'),
    (39, 'Stored', NOW() - INTERVAL '35 days', NULL),
    
    -- Item 40: Server Dell PowerEdge (Created)
    (40, 'Created', NOW() - INTERVAL '12 hours', NOW() + INTERVAL '25 days'),
    
    -- Item 41: NAS Storage 8-Bay (In Transit)
    (41, 'Created', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (41, 'In Transit', NOW() - INTERVAL '4 days', NOW() + INTERVAL '18 days'),
    
    -- Item 42: SSD Drive 2TB NVMe (Arrived at Dock)
    (42, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (42, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (42, 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() + INTERVAL '5 days'),
    
    -- Item 43: RAM DDR5 64GB Kit (Inspected)
    (43, 'Created', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days'),
    (43, 'In Transit', NOW() - INTERVAL '13 days', NOW() - INTERVAL '12 days'),
    (43, 'Arrived at Dock', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (43, 'Inspected', NOW() - INTERVAL '11 days', NOW() + INTERVAL '1 day'),
    
    -- Item 44: Graphics Card RTX 4090 (Stored)
    (44, 'Created', NOW() - INTERVAL '33 days', NOW() - INTERVAL '32 days'),
    (44, 'In Transit', NOW() - INTERVAL '31 days', NOW() - INTERVAL '30 days'),
    (44, 'Arrived at Dock', NOW() - INTERVAL '30 days', NOW() - INTERVAL '29 days'),
    (44, 'Inspected', NOW() - INTERVAL '29 days', NOW() - INTERVAL '28 days'),
    (44, 'Stored', NOW() - INTERVAL '28 days', NULL),
    
    -- Item 45: UPS Battery 1500VA (Created)
    (45, 'Created', NOW() - INTERVAL '8 hours', NOW() + INTERVAL '16 days'),
    
    -- Item 46: Projector 4K Laser (Created)
    (46, 'Created', NOW() - INTERVAL '5 hours', NOW() + INTERVAL '22 days'),
    
    -- Item 47: Sound System 5.1 (In Transit)
    (47, 'Created', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (47, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '19 days'),
    
    -- Item 48: Digital Signage Display (Arrived at Dock)
    (48, 'Created', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (48, 'In Transit', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (48, 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() + INTERVAL '13 days'),
    
    -- Item 49: Conference Camera 360 (Inspected)
    (49, 'Created', NOW() - INTERVAL '15 days', NOW() - INTERVAL '14 days'),
    (49, 'In Transit', NOW() - INTERVAL '12 days', NOW() - INTERVAL '11 days'),
    (49, 'Arrived at Dock', NOW() - INTERVAL '11 days', NOW() - INTERVAL '10 days'),
    (49, 'Inspected', NOW() - INTERVAL '9 days', NOW() + INTERVAL '6 days'),
    
    -- Item 50: Microphone System (Stored)
    (50, 'Created', NOW() - INTERVAL '29 days', NOW() - INTERVAL '28 days'),
    (50, 'In Transit', NOW() - INTERVAL '27 days', NOW() - INTERVAL '26 days'),
    (50, 'Arrived at Dock', NOW() - INTERVAL '26 days', NOW() - INTERVAL '25 days'),
    (50, 'Inspected', NOW() - INTERVAL '25 days', NOW() - INTERVAL '24 days'),
    (50, 'Stored', NOW() - INTERVAL '24 days', NULL),
    
    -- Item 51: Security Camera 4K PoE (Created)
    (51, 'Created', NOW() - INTERVAL '3 hours', NOW() + INTERVAL '12 days'),
    
    -- Item 52: Access Control Panel (In Transit)
    (52, 'Created', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day'),
    (52, 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '15 days'),
    
    -- Item 53: Motion Sensor Wireless (Arrived at Dock)
    (53, 'Created', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (53, 'In Transit', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days'),
    (53, 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '9 days'),
    
    -- Item 54: Door Lock Electronic (Inspected)
    (54, 'Created', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (54, 'In Transit', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (54, 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (54, 'Inspected', NOW() - INTERVAL '5 days', NOW() + INTERVAL '7 days'),
    
    -- Item 55: Alarm System Kit (Stored)
    (55, 'Created', NOW() - INTERVAL '26 days', NOW() - INTERVAL '25 days'),
    (55, 'In Transit', NOW() - INTERVAL '24 days', NOW() - INTERVAL '23 days'),
    (55, 'Arrived at Dock', NOW() - INTERVAL '23 days', NOW() - INTERVAL '22 days'),
    (55, 'Inspected', NOW() - INTERVAL '22 days', NOW() - INTERVAL '21 days'),
    (55, 'Stored', NOW() - INTERVAL '21 days', NULL),
    
    -- Item 56: Coffee Machine Premium (Created)
    (56, 'Created', NOW() - INTERVAL '1 hour', NOW() + INTERVAL '8 days'),
    
    -- Item 57: Water Cooler Bottleless (In Transit)
    (57, 'Created', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days'),
    (57, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '10 days'),
    
    -- Item 58: Air Purifier HEPA (Arrived at Dock)
    (58, 'Created', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (58, 'In Transit', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (58, 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '11 days'),
    
    -- Item 59: Shredder Cross-Cut (Inspected)
    (59, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (59, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (59, 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (59, 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '4 days'),
    
    -- Item 60: Vacuum Cleaner Robot (Stored)
    (60, 'Created', NOW() - INTERVAL '24 days', NOW() - INTERVAL '23 days'),
    (60, 'In Transit', NOW() - INTERVAL '22 days', NOW() - INTERVAL '21 days'),
    (60, 'Arrived at Dock', NOW() - INTERVAL '21 days', NOW() - INTERVAL '20 days'),
    (60, 'Inspected', NOW() - INTERVAL '20 days', NOW() - INTERVAL '19 days'),
    (60, 'Stored', NOW() - INTERVAL '19 days', NULL),
    
    -- Item 61: Plant Pot Smart (Created)
    (61, 'Created', NOW() - INTERVAL '30 minutes', NOW() + INTERVAL '6 days'),
    
    -- Item 62: Trash Bin Motion Sensor (In Transit)
    (62, 'Created', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day'),
    (62, 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '9 days'),
    
    -- Item 63: Drill Kit Cordless (Created)
    (63, 'Created', NOW() - INTERVAL '2 hours', NOW() + INTERVAL '14 days'),
    
    -- Item 64: Tool Cart Mobile (In Transit)
    (64, 'Created', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (64, 'In Transit', NOW() - INTERVAL '3 days', NOW() + INTERVAL '12 days'),
    
    -- Item 65: Multimeter Digital (Arrived at Dock)
    (65, 'Created', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (65, 'In Transit', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (65, 'Arrived at Dock', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    
    -- Item 66: Oscilloscope Portable (Inspected)
    (66, 'Created', NOW() - INTERVAL '11 days', NOW() - INTERVAL '10 days'),
    (66, 'In Transit', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (66, 'Arrived at Dock', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (66, 'Inspected', NOW() - INTERVAL '7 days', NOW() + INTERVAL '5 days'),
    
    -- Item 67: Soldering Station (Stored)
    (67, 'Created', NOW() - INTERVAL '21 days', NOW() - INTERVAL '20 days'),
    (67, 'In Transit', NOW() - INTERVAL '19 days', NOW() - INTERVAL '18 days'),
    (67, 'Arrived at Dock', NOW() - INTERVAL '18 days', NOW() - INTERVAL '17 days'),
    (67, 'Inspected', NOW() - INTERVAL '17 days', NOW() - INTERVAL '16 days'),
    (67, 'Stored', NOW() - INTERVAL '16 days', NULL),
    
    -- Item 68: First Aid Kit Professional (Created)
    (68, 'Created', NOW() - INTERVAL '4 hours', NOW() + INTERVAL '7 days'),
    
    -- Item 69: Fire Extinguisher CO2 (In Transit)
    (69, 'Created', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days'),
    (69, 'In Transit', NOW() - INTERVAL '2 days', NOW() + INTERVAL '13 days'),
    
    -- Item 70: Emergency Light LED (Arrived at Dock)
    (70, 'Created', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (70, 'In Transit', NOW() - INTERVAL '5 days', NOW() - INTERVAL '4 days'),
    (70, 'Arrived at Dock', NOW() - INTERVAL '4 days', NOW() + INTERVAL '10 days'),
    
    -- Item 71: Defibrillator AED (Inspected)
    (71, 'Created', NOW() - INTERVAL '10 days', NOW() - INTERVAL '9 days'),
    (71, 'In Transit', NOW() - INTERVAL '8 days', NOW() - INTERVAL '7 days'),
    (71, 'Arrived at Dock', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (71, 'Inspected', NOW() - INTERVAL '6 days', NOW() + INTERVAL '6 days'),
    
    -- Item 72: Safety Cabinet Flammable (Stored)
    (72, 'Created', NOW() - INTERVAL '32 days', NOW() - INTERVAL '31 days'),
    (72, 'In Transit', NOW() - INTERVAL '30 days', NOW() - INTERVAL '29 days'),
    (72, 'Arrived at Dock', NOW() - INTERVAL '29 days', NOW() - INTERVAL '28 days'),
    (72, 'Inspected', NOW() - INTERVAL '28 days', NOW() - INTERVAL '27 days'),
    (72, 'Stored', NOW() - INTERVAL '27 days', NULL),
    
    -- Item 73: Refrigerator Commercial (Created)
    (73, 'Created', NOW() - INTERVAL '6 hours', NOW() + INTERVAL '21 days'),
    
    -- Item 74: Microwave 1200W (In Transit)
    (74, 'Created', NOW() - INTERVAL '2 days', NOW() - INTERVAL '1 day'),
    (74, 'In Transit', NOW() - INTERVAL '1 day', NOW() + INTERVAL '11 days'),
    
    -- Item 75: Dishwasher Undercounter (Arrived at Dock)
    (75, 'Created', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (75, 'In Transit', NOW() - INTERVAL '4 days', NOW() - INTERVAL '3 days'),
    (75, 'Arrived at Dock', NOW() - INTERVAL '3 days', NOW() + INTERVAL '14 days'),
    
    -- Item 76: Ice Maker Countertop (Inspected)
    (76, 'Created', NOW() - INTERVAL '9 days', NOW() - INTERVAL '8 days'),
    (76, 'In Transit', NOW() - INTERVAL '7 days', NOW() - INTERVAL '6 days'),
    (76, 'Arrived at Dock', NOW() - INTERVAL '6 days', NOW() - INTERVAL '5 days'),
    (76, 'Inspected', NOW() - INTERVAL '5 days', NOW() + INTERVAL '8 days'),
    
    -- Item 77: Toaster Oven Convection (Stored)
    (77, 'Created', NOW() - INTERVAL '28 days', NOW() - INTERVAL '27 days'),
    (77, 'In Transit', NOW() - INTERVAL '26 days', NOW() - INTERVAL '25 days'),
    (77, 'Arrived at Dock', NOW() - INTERVAL '25 days', NOW() - INTERVAL '24 days'),
    (77, 'Inspected', NOW() - INTERVAL '24 days', NOW() - INTERVAL '23 days'),
    (77, 'Stored', NOW() - INTERVAL '23 days', NULL)
ON CONFLICT DO NOTHING;

-- Create a function to automatically update the update_time timestamp
CREATE OR REPLACE FUNCTION update_update_time_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.update_time = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update update_time
DROP TRIGGER IF EXISTS update_items_update_time ON items;
CREATE TRIGGER update_items_update_time
    BEFORE UPDATE ON items
    FOR EACH ROW
    EXECUTE FUNCTION update_update_time_column();

-- Create a function to automatically add timeline entry when item stage changes
CREATE OR REPLACE FUNCTION add_timeline_entry()
RETURNS TRIGGER AS $$
BEGIN
    -- If this is an update and the stage has changed
    IF TG_OP = 'UPDATE' AND OLD.stage != NEW.stage THEN
        -- Add new timeline entry for the new stage
        INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time)
        VALUES (NEW.id, NEW.stage, CURRENT_TIMESTAMP, NEW.expected_time);
    END IF;
    
    -- If this is an insert (new item)
    IF TG_OP = 'INSERT' THEN
        INSERT INTO item_timeline (item_id, stage, entered_time, expected_exit_time)
        VALUES (NEW.id, NEW.stage, NEW.creation_time, NEW.expected_time);
    END IF;
    
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically manage timeline entries
DROP TRIGGER IF EXISTS manage_timeline ON items;
CREATE TRIGGER manage_timeline
    AFTER INSERT OR UPDATE ON items
    FOR EACH ROW
    EXECUTE FUNCTION add_timeline_entry(); 