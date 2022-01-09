import { 
    Controller,
    Get,
    Param,
    Post,
    Body,
    Put,
    Delete
 } from '@nestjs/common';

import { StickyService } from '../services/sticky.service';

import { Sticky as StickyModel } from '@prisma/client';

@Controller('sticky')
export class StickyController {
    constructor(
        private readonly stickyService: StickyService,
    ) {}

    @Get('sticky/:id')
    async getStickyById(@Param('id') id: string): Promise<StickyModel[]> {
        return this.stickyService.stickies({
            where: { published: true }
        })
    }

    @Get('feed')
    async getPublishedStickies(): Promise<StickyModel[]> {
        return this.stickyService.stickies({
            // TODO: Need a similar one to get all posts for specific author/ user
            where: { published: true }
        })
    }

    @Get('filtered-stickies/:searchString')
    async getFilteredStickies(
        @Param('searchString') searchString: string,
    ): Promise<StickyModel[]> {
        return this.stickyService.stickies({
            where: {
                OR: [
                    {
                        title: { contains: searchString },
                    },
                    {
                        content: { contains: searchString },
                    },
                ],
            },
        });
    }

    @Post('sticky')
    async createDraft(
        @Body() postData: { title: string; content?: string; authorEmail: string },
    ): Promise<StickyModel> {
        const { title, content, authorEmail } = postData;
        return this.stickyService.createSticky({
            title,
            content,
            author: {
                connect: { email: authorEmail },
            }
        })
    }

    @Put('publish/:id')
    async publishSticky(@Param('id') id: string): Promise<StickyModel> {
        return this.stickyService.updateSticky({
            where: { id: Number(id) },
            data: { published: true },
        });
    }

    @Delete('sticky/:id')
    async deleteSticky(@Param('id') id: string): Promise<StickyModel> {
        return this.stickyService.deleteSticky({ id: Number(id) });
    }
}
