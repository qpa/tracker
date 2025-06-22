import pg from 'pg';

const { Pool } = pg;

export type DatabaseConfig = {
  host: string;
  port: number;
  database: string;
  user: string;
  password: string;
  max?: number;
  idleTimeoutMillis?: number;
  connectionTimeoutMillis?: number;
};

const config: DatabaseConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME || 'tracker',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
};

export const pool = new Pool(config);

export async function connectDB(): Promise<void> {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL database');
    client.release();
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

export async function disconnectDB(): Promise<void> {
  try {
    await pool.end();
    console.log('Disconnected from PostgreSQL database');
  } catch (error) {
    console.error('Error disconnecting from database:', error);
    throw error;
  }
}

// Helper function to execute queries
export async function query(text: string, params?: any[]): Promise<pg.QueryResult> {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } finally {
    client.release();
  }
}
