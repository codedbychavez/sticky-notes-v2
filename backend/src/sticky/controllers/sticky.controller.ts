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
    async getStickyById(@Param('id') id: string): Promise<StickyModel> {
        return this.stickyService.sticky({id: Number(id)})
    }

    @Get('drafts/:authorEmail')
    async getDraftedStickies(@Param('authorEmail') authorEmail: string): Promise<StickyModel[]> {
        return this.stickyService.stickies({
            // TODO: Need a similar one to get all posts for specific author/ user
            where: { 
                published: false,
                author: {
                    email: authorEmail,
                }
             }
        })
    }

    @Get('published/:authorEmail')
    async getPublishedStickies(@Param('authorEmail') authorEmail: string): Promise<StickyModel[]> {
        return this.stickyService.stickies({
            // TODO: Need a similar one to get all posts for specific author/ user
            where: { 
                published: true,
                author: {
                    email: authorEmail,
                }
             }
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
        console.log('This is the post data')
        console.log(postData)
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
