import React from "react";
import { Avatar } from '@components/atoms/Avatar/Avatar'


export const ProjectMembersTag = () => (
    <>
        <div className="flex items-center border rounded-3xl px-1 py-0.5 w-fit mb-2">
            <div className="w-fit">
                <Avatar initial="A" size={35} />
            </div>
            <div className="ml-1 w-fit">
                <h4 className="font-bold -mb-2">Ariana Grande</h4>
                <p className="text-sm text-gray-600">Executive Producer</p>
            </div>
        </div>

        <div className="flex items-center border rounded-3xl px-1 py-0.5 w-fit mb-2">
            <div className="w-fit">
                <Avatar initial="A" size={35} />
            </div>
            <div className="ml-1 w-fit">
                <h4 className="font-bold -mb-2">Ariana Grande</h4>
                <p className="text-sm text-gray-600">Executive Producer</p>
            </div>
        </div>
    </>
)