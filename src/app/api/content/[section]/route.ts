import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ section: string }> }
) {
  try {
    // Await the params Promise to access the section
    const { section } = await context.params;

    // Sample mock data
    const mockData = {
      summary: 'A seasoned DevOps professional...',
      skills: [
        {
          category: 'Leadership & Collaboration',
          items: ['Team Leadership', 'Mentorship'],
        },
      ],
      experiences: [
        {
          title: 'Tech Lead',
          company: 'Current Company',
          period: '2023 - Present',
          description: 'Leading technical initiatives',
          achievements: ['Led team of 8 engineers'],
        },
      ],
    };

    // Check if the section exists in mockData
    const data = mockData[section as keyof typeof mockData];
    if (data) {
      return NextResponse.json({ success: true, data });
    } else {
      return NextResponse.json({ error: 'Section not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json(
      {
        error: 'Failed to fetch content',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}