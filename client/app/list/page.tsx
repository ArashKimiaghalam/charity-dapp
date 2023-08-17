"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import Link from "next/link"
import { formatCharityData } from "@/func/formatCharityData"
import thousandSeparator from "@/func/thousandSep"
import timeConvert from "@/func/timeConvert"
import listState from "@/store/listState"
import axios from "axios"
import { QueryClient, useQuery } from "react-query"

import { Campaign } from "@/types/campaign"
import { MoreInfoCampaginDrawer } from "@/components/ui/Drawer"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Loading from "@/components/Loading"

const TableDemo = () => {
  const getData = async () => {
    const response = await axios.get(
      `https://charity-dapp-api.onrender.com/get-all-campaign`
    )
    return response.data
  }

  const { data, isLoading, refetch } = useQuery("list", getData)

  const formattedCharityData = formatCharityData(data, isLoading)
  const campList = formattedCharityData

  return (
    <>
      <div className="border p-4 rounded-lg w-full mt-10 mb-40">
        {!isLoading && !campList ? (
          <div className="w-full flex justify-center items-center">
            There is no Campaign to show for now!
          </div>
        ) : (
          <Table className="w-full">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Admin Fee</TableHead>
                <TableHead>Raised Amount</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {!isLoading ? (
                campList?.map((camp: any, index: number) => (
                  <TableRow key={index}>
                    <TableCell className="font-bold text-base">
                      {camp?.name}
                    </TableCell>
                    <TableCell className="truncate max-w-xs">
                      {camp?.desc}
                    </TableCell>
                    <TableCell>{camp?.dueDate}</TableCell>
                    <TableCell>{camp?.adminFee}</TableCell>
                    <TableCell>{camp?.raisedAmount}</TableCell>
                    <TableCell className="text-right">
                      <MoreInfoCampaginDrawer {...{ camp, index, refetch }}>
                        <Button>More info</Button>
                      </MoreInfoCampaginDrawer>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <>
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                    <TableCell>
                      <Skeleton className="h-10 w-[200px]" />
                    </TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        )}
      </div>
    </>
  )
}

export default TableDemo
