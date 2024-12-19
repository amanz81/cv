import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface ContentData {
  summary?: string;
  skills?: {
    category: string;
    items: string[];
  }[];
  experiences?: {
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }[];
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { section: string } }
) {
  try {
    const data: ContentData = await request.json();
    const { section } = params;

    // Here you would typically save to a database
    // For now, we'll just validate the data structure
    switch (section) {
      case 'summary':
        if (typeof data.summary !== 'string') {
          throw new Error('Invalid summary data');
        }
        break;
      case 'skills':
        if (!Array.isArray(data.skills)) {
          throw new Error('Invalid skills data');
        }
        break;
      case 'experience':
        if (!Array.isArray(data.experiences)) {
          throw new Error('Invalid experience data');
        }
        break;
      default:
        throw new Error('Invalid section');
    }

    // For now, just return success
    return NextResponse.json({ 
      success: true,
      message: `${section} updated successfully`
    });

  } catch (error) {
    console.error('Error updating content:', error);
    return NextResponse.json(
      { 
        error: 'Failed to update content',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}

// Add GET method to fetch content
export async function GET(
  request: NextRequest,
  { params }: { params: { section: string } }
) {
  try {
    const { section } = params;
    
    // Here you would typically fetch from a database
    // For now, return mock data
    const mockData: ContentData = {
      summary: 'A seasoned DevOps professional...',
      skills: [
        {
          category: 'Leadership & Collaboration',
          items: ['Team Leadership', 'Mentorship']
        }
      ],
      experiences: [
        {
          title: 'Tech Lead',
          company: 'Current Company',
          period: '2023 - Present',
          description: 'Leading technical initiatives',
          achievements: ['Led team of 8 engineers']
        }
      ]
    };

    return NextResponse.json({ 
      success: true,
      data: mockData[section as keyof ContentData]
    });

  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch content',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
} 